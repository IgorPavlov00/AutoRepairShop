# Auto Repair Shop

This is a static website designed to serve as the digital storefront for an auto repair shop. With a sleek and user-friendly interface, this website aims to attract potential customers, showcase the shop's services, and provide essential information to visitors. Built using Angular, the website offers dynamic elements and smooth navigation while maintaining the simplicity and reliability required for a static site.

Technologies Used:

● Angular: Front-end framework for building dynamic web applications.

● NodeJS: Backend framework supporting server-side logic and integrations, including Node Mailer for email functionalities.

![image](https://github.com/IgorPavlov00/AutoRepairShop/assets/103071674/937a8dda-928f-40c0-963e-4e58d372e3c3)

![image](https://github.com/IgorPavlov00/AutoRepairShop/assets/103071674/e9bc9aaa-997a-4065-9e99-e1fc8a1ca13b)

Instructions:

```
npm install
```

```
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

```
node sendmail.js
```
