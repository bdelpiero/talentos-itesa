const nodemailer = require("nodemailer");

async function main(email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "itesap5demo@gmail.com", // generated ethereal user
      pass: "p5itesademo", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Talentos-Itesa 👻" <itesap5demo@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Invitación a unirte a nuestra plataforma.", // Subject line
    text: "Hello world?", // plain text body
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Bienvenido a ITESA</span></h1>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);

module.exports = main;
