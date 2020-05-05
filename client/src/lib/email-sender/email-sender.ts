"use strict";
const nodemailer = require("nodemailer");

class EmailSender {
  sendByNodemailer(
    mailerName: string,
    mailerEmail: string,
    emailsToSend: string[]
  ) {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "ChaseErickson5050@yandex.com", // generated ethereal user
          pass: "sJsym5Dic1", // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // sendByNodemailer mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${mailerName}" <${mailerEmail}>`, // sender address
        to: `${emailsToSend}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
  }

  // sendBySendmail() {
  //   const fs = require("fs");
  //
  //   const sendmail = require('sendmail')({
  //     logger: {
  //       debug: console.log,
  //       info: console.info,
  //       warn: console.warn,
  //       error: console.error
  //     },
  //     silent: false,
  //     dkim: { // Default: False
  //       privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
  //       keySelector: 'mydomainkey'
  //     },
  //     devPort: 1025, // Default: False
  //     devHost: 'localhost', // Default: localhost
  //     smtpPort: 2525, // Default: 25
  //     smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
  //   });
  //
  //   sendmail({
  //     from: 'no-reply@university-checklist.ru',
  //     to: 'R.V.Mosolov@ya.ru',
  //     subject: 'test sendmail',
  //     html: 'Mail of test sendmail',
  //   }, function(err, reply) {
  //     console.log(err && err.stack);
  //     console.dir(reply);
  //   });
  // }
}

export default EmailSender;
