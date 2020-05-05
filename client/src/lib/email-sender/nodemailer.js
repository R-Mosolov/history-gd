"use strict";
const nodemailer = require("nodemailer");

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
  let info = transporter.sendMail({
    from: `"Test Name" <ChaseErickson5050@yandex.com>`, // sender address
    to: `R.V.Mosolov@ya.ru`, // list of receivers
    subject: "О важности информации в Интернет-пространстве - 4", // Subject line
    text:
      "3 Цель работы\n" +
      "На основе анализа функциональных возможностей 6 приложений определить набор повторно используемых компонентов. Далее протестировать их на примере 1 экземпляра. \n" +
      "4 Научная новизна\n" +
      "Веб-приложение «История гениального открытия», для которого планируется выделение повторно используемых компонентов, рассчитано на учёных и призвано разрешать следующие проблемы в российской науке:", // plain text body
    html: `<p>3 Цель работы</p>
            <p>На основе анализа функциональных возможностей 6 приложений определить набор повторно используемых компонентов. Далее протестировать их на примере 1 экземпляра. \n</p>
            <p>1.2 Сформированные повторно используемые компоненты планируется использовать в процессе разработки научного веб-приложения «История гениального открытия».\n</p>
            <p>4 Научная новизна\n</p>
            <p>Веб-приложение «История гениального открытия», для которого планируется выделение повторно используемых компонентов, рассчитано на учёных и призвано разрешать следующие проблемы в российской науке:</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
