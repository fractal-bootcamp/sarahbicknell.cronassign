"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mailgun = require("mailgun-js");
var dotenv = require("dotenv");
dotenv.config();
var BOY_ADJECTIVES = ['delightful', 'rapturous', 'beautiful', 'wonderful', 'amazing'];
var BOY_WORDS = ['boy', 'creature', 'specimen', 'lad', 'pup'];
var api_key = process.env.MAILGUN_API_KEY || '';
var domain = process.env.MAILGUN_DOMAIN || '';
var from_email = process.env.FROM_EMAIL || '';
var to_email = process.env.TO_EMAIL || '';
var mg = mailgun({ apiKey: api_key, domain: domain });
var data = {
    from: "Excited User <".concat(from_email, ">"),
    to: to_email,
    subject: 'A MESSAGE FROM A SECRET ADMIRER',
    text: "I've been watching you from afar and I have determined you are the best most ".concat(BOY_ADJECTIVES[Math.floor(Math.random() * 5)], " ").concat(BOY_WORDS[Math.floor(Math.random() * 5)], " ! Please love me !")
};
mg.messages().send(data, function (error, body) {
    if (error) {
        console.error('Error sending email:', error);
    }
    else {
        console.log('Email sent successfully. Response:', body);
    }
});
