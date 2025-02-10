const nodemailer = require('nodemailer');
require('dotenv').config()

async function Email_Sender(email) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.password
      }
    });
    const mailOptions = {
      from: 'sigma.elaboratory@gmail.com',
      to: email,
      subject: '',
      text: ``
    };
    let response = await transporter.sendMail(mailOptions)
    if (response){
      console.log("email send successfull")
      return response.response;
    }
  }
  catch (error) {
    return error;
  }

}
module.exports = Email_Sender;