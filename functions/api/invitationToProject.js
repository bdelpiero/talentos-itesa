const nodemailer = require("nodemailer");

async function invitationToProject(snap, context) {
  const values = snap.data()
  console.log(values, "aca esta values! ")
  console.log(values.email, "------ aca esta values.email! ------- ")
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
    to: `${values.email}`, // list of receivers
    subject: "Invitación a unirte a un proyecto", // Subject line
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Visitá tu perfil para confirmar la invitación </span></h1><a href="https://talentos-itesa.web.app/freelancer">Ingresar</a>`, // html body
  });

  console.log("---- Message sent: %s ---", values.email);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return;
}

module.exports = invitationToProject;
