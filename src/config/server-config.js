const dotenv = require('dotenv');

dotenv.config(); // if port not working use {path:'../.env'}

module.exports = {
    PORT: process.env.PORT,
    GMAIL_PASS: process.env.GMAIL_PASS,
    GMAIL_EMAIL: process.env.GMAIL_EMAIL
}