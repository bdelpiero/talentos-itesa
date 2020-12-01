const nodemailer = require("nodemailer");

async function registeredEmail(object) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "itesap5demo@gmail.com", // generated ethereal user
      pass: "p5itesademo", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Talentos-Itesa 👻" <itesap5demo@gmail.com>', // sender address
    to: "itesap5demo@gmail.com", // list of receivers
    subject: "Firma de contrato", // Subject line
    text: "Hello world?", // plain text body
    // attachments: [
    //   {
    //     filename: "test.pdf",
    //     path: object.name,
    //     cid: link que contiene el archivo
    //     contentType: "application/pdf",
    //   },
    // ],
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Bienvenido a ITESA</span></h1><p>${object.selfLink}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = registeredEmail;
