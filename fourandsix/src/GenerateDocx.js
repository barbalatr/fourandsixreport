var fs = require("fs");
var docx = require("docx");

// Done! A file called 'My First Document.docx' will be in your file system.
export function generateDoc() {
  // Create document
  var doc = new docx.Document();

  // Add some content in the document
  var paragraph = new docx.Paragraph("Some COOOOOLL text here.");
  // Add more text into the paragraph if you wish
  paragraph.addRun(new docx.TextRun("Lorem Ipsum Foo Bar"));
  doc.addParagraph(paragraph);

  // Used to export the file into a .docx file
  var packer = new docx.Packer();
  packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("My First abacate.docx", buffer);
  });
}
