const express = require('express');

const { ServerConfig } = require('./config');

const apiRoutes = require('./routes');

const mailsender = require('./config/email-config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    try {
            const response = await mailsender.sendMail({
            from: ServerConfig.GMAIL_EMAIL, // sender address
            to: "devildube@gmail.com", // list of receivers , (comma) separated
            subject: "Demo Send Mail", // Subject line
            text: "Testing of sending mail", // plain text body
            // html: "<b>Beta Testing</b>", // html body
            });

            console.log(response);
    } catch (error) {
        console.log(error);
    }
    console.log(`Successfully started the server on port : ${ServerConfig.PORT}`);
});