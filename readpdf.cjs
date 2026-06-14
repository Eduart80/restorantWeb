const { PDFParse } = require('pdf-parse');
const pdfParse = new PDFParse();
const fs = require('fs');
const buf = fs.readFileSync('docs/MIO GUSTO Menu.pdf');
pdfParse.parse(buf).then(d => {
  console.log(d.text);
}).catch(e => console.error(e));
