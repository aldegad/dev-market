import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import twilio from "twilio";
import formData from "form-data";
import Mailgun from "mailgun.js";


const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_TOKEN!
});

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? {phone: +phone} : email ? {email} : null;
  if(!user) return res.status(400).json({ok: false});

  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user
          },
          create: {
            name: "Anonymous",
            ...user
          }
        }
      }
    }
  })
  console.log(token);

  if(phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: `+82` + phone,
      body: `Your login token is ${payload}`
    })
    console.log(message); */
  }
  if(email) {
    /* mg.messages
    .create("sandboxa020030053b8479e9ae468d1ed49c6e3.mailgun.org", {
      from: "Mailgun Sandbox <postmaster@sandboxa020030053b8479e9ae468d1ed49c6e3.mailgun.org>",
      to: [email],
      subject: "Hello",
      html: `<p>Your login token is <strong>${payload}</strong></p>`
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error`; */
  }
  return res.json({ ok: true });
}

export default withHandler("POST", handler)