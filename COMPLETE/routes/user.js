const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sendgrid = require('@sendgrid/mail');
const twilio = require('twilio');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);




router.post('/', async (req, res) => {

      const user = await User.query().insert(req.body);
      res.json(user);
//   const { email, phone, name } = req.body;

//   if (!email || !phone || !name) return res.status(400).send('Missing fields');

  try {
    // Email
    await sendgrid.send({
      to: req.body.email,
      from: 'saisharan@bitcot.com', 
      subject: 'Notification',
      text: `Hi ${req.body.name}, this is a test email from SendGrid.`,
    });

    // SMS
    await client.messages.create({
      body: `Hi ${req.body.name}, this is a test SMS from Twilio.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.phone
    });

    res.send('📧 Email and 📱 SMS sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send notification');
  }
});

module.exports = router;
