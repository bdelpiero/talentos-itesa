const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { invite } = require("./APIs/invite");
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.get("/invite", invite);

// app.listen(port)
exports.api = functions.https.onRequest(app);
