// emailService.js
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendVerificationEmail(email) {
  const token = jwt.sign(
    { data: 'Token Data' },
    'ourSecretKey',
    { expiresIn: '5m' }
  );

  const mailConfigurations = {
    from: 'juman60000@gmail.com',
    to: email,
    subject: 'Email Verification',
    text: `Hi! There, You have recently visited 
           our website and entered your email. 
           Please follow the given link to verify your email 
           ${process.env.API_SERVER}/blog/api/emailVerify/${token} 
           Thanks`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw error;
    console.log('Email Sent Successfully');
    console.log(info);
  });
}

module.exports = { sendVerificationEmail };
