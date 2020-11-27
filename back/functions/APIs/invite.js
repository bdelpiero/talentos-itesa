const invitationEmail = require("../mailService");

exports.invite = (req, res) => {
  const email = req.body.email;
  invitationEmail(email);
  res.sendStatus(200);
  // .then(() => res.sendStatus(200))
  // .catch(() => res.sendStatus(400));
};
