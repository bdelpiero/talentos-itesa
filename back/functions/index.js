const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { getAllTodos } = require("./APIs/todos");
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.get("/todos", getAllTodos);

// app.listen(port)
exports.api = functions.https.onRequest(app);
