const functions = require("firebase-functions");
const invitationEmail = require("./api/invitationEmail");
const registeredEmail = require("./api/registeredEmail");
const express = require("express");
const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post("/contract", (req, res) => {
  res.send(req.body.file);
});

exports.api = functions.https.onRequest(app);

exports.watchCreate = functions.firestore
  .document("invites/{mail}")
  .onCreate(invitationEmail);

exports.sendContract = functions.firestore
  .document("users/{userId}")
  .onCreate(registeredEmail);

//exports.sendContract = functions.storage.object().onFinalize(registeredEmail);
