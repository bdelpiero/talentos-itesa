const functions = require("firebase-functions");
const invitationEmail = require("./api/invitationEmail");
const registeredEmail = require("./api/registeredEmail");

exports.watchCreate = functions.firestore
  .document("invites/{mail}")
  .onCreate(invitationEmail);

exports.sendContract = functions.storage.object().onFinalize(registeredEmail);
