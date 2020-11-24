const nodemailer = require('nodemailer');

class EmailSender {
  sendByNodemailer(mailerName, mailerEmail, emailsToSend) {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      const testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'ChaseErickson5050@yandex.com', // generated ethereal user
          pass: 'sJsym5Dic1', // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // sendByNodemailer mail with defined transport object
      const info = transporter.sendMail({
        from: `"${mailerName}" <${mailerEmail}>`, // sender address
        to: `${emailsToSend}`, // list of receivers
        subject: 'О ценности писем в Интернете - 4', // Subject line
        text:
          '1 Об отчёте\n'
          + '1.1 В рамках настоящего отчёта будут проведены сбор, систематизация и анализ общесистемных, общедоменных и специальных функций для дальнейшего проектирования повторно используемых компонентов. \n'
          + '1.2 Сформированные повторно используемые компоненты планируется использовать в процессе разработки научного веб-приложения «История гениального открытия».\n'
          + '2 Актуальность работы\n'
          + 'Актуальность работы заключается в том, что будут выделены повторно используемые компоненты, адаптированные под научную предметную область (информационный инструментарий, автоматизирующий деятельность учёных) с использованием последних достижений программной инженерии на 2020 г. Аналоги подобных веб-приложений в России не были найдены.', // plain text body
        html:
          "<img src='../../../public/img/GUI-on-04.05.2020.png'/>"
          + '<p><b>1 Об отчёте</b></p>'
          + '<p>1.1 В рамках настоящего отчёта будут проведены сбор, систематизация и анализ общесистемных, общедоменных и специальных функций для дальнейшего проектирования повторно используемых компонентов. \n</p>'
          + '<p>1.2 Сформированные повторно используемые компоненты планируется использовать в процессе разработки научного веб-приложения «История гениального открытия».\n</p>'
          + '<p>2 Актуальность работы\n</p>'
          + '<p>Актуальность работы заключается в том, что будут выделены повторно используемые компоненты, адаптированные под научную предметную область (информационный инструментарий, автоматизирующий деятельность учёных) с использованием последних достижений программной инженерии на 2020 г. Аналоги подобных веб-приложений в России не были найдены.</p>', // html body
      });

      console.log('Message sent: %s', info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main();
  }
}

export default EmailSender;
