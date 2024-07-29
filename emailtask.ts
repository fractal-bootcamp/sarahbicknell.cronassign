import * as mailgun from 'mailgun-js';
import * as dotenv from 'dotenv';

dotenv.config();

const BOY_ADJECTIVES = ['delightful', 'rapturous', 'beautiful', 'wonderful', 'amazing']

const BOY_WORDS = ['boy', 'creature',  'specimen', 'lad', 'pup']

const api_key = process.env.MAILGUN_API_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || '';
const from_email = process.env.FROM_EMAIL || '';
const to_email = process.env.TO_EMAIL || '';

const mg = mailgun({apiKey: api_key, domain: domain});

const data = {
  from: `Excited User <${from_email}>`,
  to: to_email,
  subject: 'A MESSAGE FROM A SECRET ADMIRER',
  text: `I've been watching you from afar and I have determined you are the best most ${BOY_ADJECTIVES[Math.floor(Math.random() * 5)]} ${BOY_WORDS[Math.floor(Math.random() * 5)]} ! Please love me!`
};

mg.messages().send(data, function (error, body) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully. Response:', body);
  }
});