// Serves the built Angular site and handles the contact form.
// All credentials come from environment variables (see .env.example).
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

const DIST = path.join(__dirname, '..', 'dist', 'auto-repair-shop');
const LIMITS = { name: 80, lastname: 80, email: 160, message: 4000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function buildEmail({ name, lastname, email, message }, env) {
  const rows = [['Ime', name], ['Prezime', lastname], ['Email', email], ['Poruka', message]];
  return {
    from: env.MAIL_FROM || 'Radionica Radonić <onboarding@resend.dev>',
    to: env.MAIL_TO,
    replyTo: email,
    subject: `Novi upit: ${name} ${lastname}`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    html: `<h1>Nova poruka</h1>${rows
      .map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v).replace(/\n/g, '<br>')}</p>`)
      .join('')}`,
  };
}

// Render's free plan blocks outbound SMTP, so the Resend HTTP API is preferred.
// SMTP remains available for paid instances or other hosts.
function createSender(env) {
  if (!env.MAIL_TO) return null;

  if (env.RESEND_API_KEY) {
    return async (mail) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: mail.from, to: [mail.to], reply_to: mail.replyTo,
          subject: mail.subject, text: mail.text, html: mail.html,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
    };
  }

  if (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) {
    const port = Number(env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST, port, secure: port === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    });
    return (mail) => transporter.sendMail({ ...mail, from: env.MAIL_FROM || env.SMTP_USER });
  }

  return null;
}

function createRateLimiter() {
  const hits = new Map();
  return (req, res, next) => {
    const now = Date.now();
    const recent = (hits.get(req.ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) {
      return res.status(429).json({ success: false, message: 'Too many requests' });
    }
    recent.push(now);
    hits.set(req.ip, recent);
    next();
  };
}

function validate(body) {
  for (const [field, max] of Object.entries(LIMITS)) {
    const value = body[field];
    if (typeof value !== 'string' || !value.trim() || value.length > max) return false;
  }
  return EMAIL_PATTERN.test(body.email);
}

function createApp(env = process.env, send = createSender(env)) {
  const app = express();
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.get('/healthz', (_req, res) => res.send('ok'));

  app.post('/send-email', createRateLimiter(), express.json({ limit: '20kb' }), async (req, res) => {
    const body = req.body || {};
    // Honeypot: real visitors never see this field, so report success and drop it.
    if (body.website) return res.json({ success: true });
    if (!validate(body)) return res.status(400).json({ success: false, message: 'Invalid form data' });
    if (!send) {
      console.error('Email is not configured: set MAIL_TO and RESEND_API_KEY (or SMTP_*).');
      return res.status(503).json({ success: false, message: 'Email is not configured' });
    }
    try {
      await send(buildEmail(body, env));
      res.json({ success: true });
    } catch (err) {
      console.error('Failed to send email:', err.message);
      res.status(502).json({ success: false, message: 'Error sending email' });
    }
  });

  app.use(express.static(DIST, {
    setHeaders(res, filePath) {
      // Angular fingerprints bundles, so only those are safe to cache forever.
      const fingerprinted = /\.[0-9a-f]{16}\.(js|css)$/.test(filePath);
      res.setHeader('Cache-Control', fingerprinted ? 'public, max-age=31536000, immutable'
        : filePath.endsWith('.html') ? 'no-cache' : 'public, max-age=86400');
    },
  }));
  app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')));
  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 4242;
  createApp().listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = { createApp, buildEmail, escapeHtml };
