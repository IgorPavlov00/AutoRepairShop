# 🚗 Auto Repair Shop  

*A modern digital storefront for automotive services with seamless email integration.*

---

## 🌟 Features  
- **🛠️ Service Showcase**: Highlight key repair services and specialties  
- **📧 Contact Form**: Integrated email functionality using Node Mailer  
- **📱 Responsive Design**: Mobile-friendly interface  
- **📸 Visual Gallery**: Display shop facilities and work examples  
- **📍 Location Information**: Easy-to-find contact details and business hours  
- **💻 Hero Section**: Engaging landing page with clear call-to-action  

---

## 🛠️ Tech Stack  
**Frontend**  
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)  
**Backend**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)  
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)  
**Email Service**  
![Nodemailer](https://img.shields.io/badge/Nodemailer-4B32C3?style=flat&logo=maildotru&logoColor=white)  

---

## 🚀 Live Demo  
Experience the live application: [https://main--autolimarija.netlify.app/](https://main--autolimarija.netlify.app/)  

---

## 📸 Screenshots  
| Homepage | Contact Section |  
|----------|-----------------|  
| ![Homepage](https://github.com/IgorPavlov00/AutoRepairShop/assets/103071674/937a8dda-928f-40c0-963e-4e58d372e3c3) | ![Contact](https://github.com/IgorPavlov00/AutoRepairShop/assets/103071674/e9bc9aaa-997a-4065-9e99-e1fc8a1ca13b) |  

---

## 🏁 Getting Started  

### Prerequisites  
- Node.js v16+  
- Angular CLI  
- NPM package manager  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/IgorPavlov00/AutoRepairShop.git  
   cd AutoRepairShop
   
# Instructions:

```
npm install
```

## ✉️ Email Configuration

### 1. Update Email Settings
Navigate to `sendmail.js` and modify the email configuration:

```javascript
// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',    // Replace with your email
    pass: 'your-app-password'        // Use app-specific password
  }
});

// Configure email options
app.post('/send-email', (req, res) => {
  const { name, lastname, email, subject, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',      // Recipient email
    subject: 'Novi Posao',
    text: `Ime: ${name}\nPrezime: ${lastname}\nEmail: ${email}\nPoruka: ${message}`
  };



Run node server

```
node sendmail.js
