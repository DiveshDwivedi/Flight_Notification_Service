const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, GMAIL_PASS } = require('../config/server-config');

const mailsender = nodemailer.createTransport({
    service: 'GMail',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: GMAIL_EMAIL,
      pass: GMAIL_PASS
    }
  });


module.exports = mailsender;