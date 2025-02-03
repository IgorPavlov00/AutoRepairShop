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

In the sendmail.js file, locate the to variable and replace it with your own email address. This allows you to receive emails sent from the application.

```javascript
app.post('/send-email', (req, res) => {
  const { name, lastname, email, subject, message } = req.body;

  // Email message setup
  // Note: Users need to replace the 'to' field with their own email address
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com', // <-- Replace with your own email address so u can see the email u would get
    subject: 'Novi Posao', // You can customize the subject here
    text: `Ime: ${name}\nPrezime: ${lastname}\nEmail: ${email}\nPoruka: ${message}`
  };
```

Run node server

```
node sendmail.js
```
