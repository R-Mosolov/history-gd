// class PdfGenerator {
//   createFile(title, author, creationDate) {
//     // Module's variables initialization
//     const express = require("express");
//     const router = express.Router();
//     const pdfMake = require("../lib/pdfmake");
//     const vfsFonts = require("../lib/vfs_fonts");
//     pdfMake.vfs = vfsFonts.pdfMake.vfs;
//
//     router.post("/pdf", (req, res) => {
//       // Function's variables initialization
//       const author = req.body.author;
//       const objectName = req.body.objectName;
//       const objectAddress = req.body.objectAddress;
//       const objectInfo = req.body.objectInfo;
//       const objectDescription = req.body.objectDescription;
//
//       var documentDefinition = {
//         content: [
//           {
//             text: createHeader(),
//             style: "header",
//           },
//           {
//             text: createTitle(),
//             style: "title",
//           },
//           {
//             text: createMainText(
//                 author,
//                 objectName,
//                 objectAddress,
//                 objectInfo,
//                 objectDescription
//             ),
//             style: "mainText",
//           },
//         ],
//
//         styles: {
//           header: { alignment: "right" },
//           title: { alignment: "center" },
//           mainText: { alignment: "left" },
//         },
//       };
//
//       const pdfDoc = pdfMake.createPdf(documentDefinition);
//       pdfDoc.getBase64((data) => {
//         res.writeHead(200, {
//           "Content-Type": "application/pdf",
//           "Content-Disposition": `attachment;filename="${
//               "doc_" + Math.floor(Math.random() * 100000)
//           }.pdf"`,
//         });
//
//         const download = Buffer.from(data.toString("utf-8"), "base64");
//         res.end(download);
//       });
//     });
//
// // CREATING A MAIN FUNCTION
//
//     function createMainText(
//         author,
//         objectName,
//         objectAddress,
//         objectInfo,
//         objectDescription
//     ) {
//       return (
//           `${title}`
//       );
//     }
//
// // CREATING ADDITIONAL FUNCTIONS
//
//     function createTitle() {
//       return `Заместителю министра здравоохранения РТ\n
//                 Фатихову И.Р.\n
//                 \n`;
//     }
//
//     function createAuthor() {
//       return `Уважаемый Ильдар Разинович!\n
//                 \n`;
//     }
//
//     function createCreationDate() {
//       return `Уважаемый Ильдар Разинович!\n
//                 \n`;
//     }
//
//     function transformDate(userDate) {
//       const date = new Date(userDate);
//       const monthNames = [
//         "января",
//         "февраля",
//         "марта",
//         "апреля",
//         "мая",
//         "июня",
//         "июля",
//         "августа",
//         "сентября",
//         "октября",
//         "ноября",
//         "декабря",
//       ];
//
//       const day = date.getDate();
//       const month = monthNames[date.getMonth()];
//       const year = date.getFullYear();
//
//       return `${day} ${month} ${year} г.`;
//     }
//
//     module.exports = router;
//   }
// }
