// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type Data = {
  message: string;
  status: boolean;
};

var API_HOST = process.env.API_HOST;
var API_POST = process.env.API_POST;
var API_USER_ID = process.env.API_USER_ID;
var API_SECRET = process.env.API_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var { fullname, email, tel, message, company, service } = req.body;

  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "mail.walkiya.com.ng",
  //   port: 465,
  //   secure: true, // true for 465, false for other ports
  //   auth: {
  //     user: "business@walkiya.com.ng", // generated ethereal user
  //     pass: "8imG!OS9kA2w3)", // generated ethereal password
  //   },
  // });

  let transporter = nodemailer.createTransport({
    host: API_HOST,
    port: API_POST,
    secure: false, // true for 465, false for other ports
    auth: {
      user: API_USER_ID, // generated ethereal user
      pass: API_SECRET, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: API_USER_ID, // sender address
    to: "business@walkiya.com.ng", // list of receivers
    subject: "Message form Website Contact", // Subject line
    text: `name: ${fullname}, email: ${email}, company: ${company}, phone: ${tel}, service: ${service}, message: ${message}`,
  });

  console.log("Message sent: %s", info);
  // var SibApiV3Sdk = require("sib-api-v3-sdk");

  // SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
  //   "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";

  //   new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
  //     {
  //       'subject':'Hello from the Node SDK!',
  //       'sender' : {'email':'api@sendinblue.com', 'name':'Sendinblue'},
  //       'replyTo' : {'email':'api@sendinblue.com', 'name':'Sendinblue'},
  //       'to' : [{'name': 'John Doe', 'email':'kingsonseang@gmail.com'}],
  //       'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
  //       'params' : {'bodyMessage':'Made just for you!'}
  //     }
  //   ).then(
  //   function (data: any) {
  //     console.log(
  //       "API called successfully. Returned data: " + JSON.stringify(data)
  //     );
  //   },
  //   function (error: any) {
  //     console.error(error);
  //   }
  // );

  res.status(200).json({
    status: true,
    message: "Message send successfuly you will get a mail from us soon.",
  });
}

// Message send successfuly you will get a mail from us soon.
