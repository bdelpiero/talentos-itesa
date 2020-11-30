const functions = require("firebase-functions");
const invitationEmail = require("./api/invitationEmail");

exports.watchCreate = functions.firestore
  .document("invites/{mail}")
  .onCreate(invitationEmail);
