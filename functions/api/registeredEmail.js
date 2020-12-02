const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// const serviceAccount = require("../../todoapp-9d6d4-firebase-adminsdk-ndurh-4486428308.json");
// const os = require("os");
// const fs = require("fs");
const { Storage } = require("@google-cloud/storage");

async function registeredEmail(object) {
  // Creates a client
  //functions.logger.log("Hello from info. Here's an object:", object);

  const gcs = new Storage();
  const bucket = gcs.bucket(object.bucket);
  const fileLink = object.selfLink;

  // functions.logger.log("gcs", gcs);
  // functions.logger.log("bucket", bucket);
  functions.logger.log("LINK", fileLink);
  const [url] = await bucket.file(fileLink).getSignedUrl({
    action: "read",
    expires: "03-09-2491",
  });
  functions.logger.log("url", url);
  // const fileName = filePath.split("/").pop();
  // const bucketDir = path.dirname(filePath);

  // const workingDir = path.join(os.tmpdir(), "contract");
  // // const tmpFilePath = path.join(workingDir, 'source.png');
  // const tmpFilePath = path.join(workingDir, fileName);
  // //const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  // await bucket.file(filePath).download({
  //   destination: tmpFilePath,
  // });

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
    //     filename: "file.pdf",
    //     path: url,
    //     contentType: "application/pdf",
    //   },
    // ],
    // ],
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Bienvenido a ITESA</span></h1><p>${url}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // return fs.remove(workingDir);
}

module.exports = registeredEmail;
