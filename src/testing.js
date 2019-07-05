// Add images to header and footer
// Import from 'docx' rather than '../build' if you install from npm
var docx = require("docx");
var fs = require("fs");

const doc = new docx.Document();

doc.createParagraph("Hello World");

doc.Header.createImage(fs.readFileSync("./Picture1.jpeg"));
doc.Header.createImage(fs.readFileSync("./brasaoSP.jpeg"));

const packer = new docx.Packer();

packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("My Document.docx", buffer);
});
