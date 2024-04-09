const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
const port = 4242;

app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup with SSL certificate validation bypass
const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:465,
  secure:true,
  auth: {
    user: 'igorpavlov106@gmail.com',
    pass: 'ukct pdko vlix llme'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name,lastname, email, subject, message } = req.body;

  // Email message setup
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'aldonahzero123@gmail.com',
    subject: `Novi Posao`,
    html: `
      <h1>Nova Poruka</h1>
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Prezime:</strong> ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Poruka:</strong> ${message}</p>
    `
  };


  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error sending email' }); // Send JSON response for error
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' }); // Send JSON response for success
    }
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

