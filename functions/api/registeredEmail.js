const nodemailer = require("nodemailer");

async function registeredEmail(snap, context) {
  const values = snap.data();
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
    from: '"Talentos-Itesa" <itesap5demo@gmail.com>', // sender address
    to: `${values.email}`, // list of receivers
    subject: "Creación de usuario.", // Subject line
    text: "Welcome", // plain text body
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Bienvenido ${values.name}! Gracias por sumarte a nuestra comunidad</span></h1>`, // html body
    attachments: [
      {
        filename: "contrato.pdf",
        contentType: "application/pdf",
        path: `${values.nonDisclosure}`,
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return;
}

module.exports = registeredEmail;
