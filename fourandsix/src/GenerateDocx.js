var fs = require("fs");
var docx = require("docx");

export function generateDoc(body) {
  console.log("bagulho eh doi");
  // Create document
  var doc = new docx.Document();

  // Add some content in the document
  var paragraph = new docx.Paragraph(
    "Em " +
      body.dataAtendimento +
      " , no Instituto de Criminalística da Superintendência da Polícia Técnico-Científica da Secretaria da Segurança Pública do Estado de São Paulo, em conformidade com o disposto no artigo 178 do Decreto Lei nº 3.689, de 3 de outubro de 1941, o Diretor deste Instituto, Dr. Maurício da Silva Lazzarin, designou o Perito Criminal Dr. Rodrigo Barbalat Viana para proceder aos exames periciais em face da requisição de exame expedida pela autoridade competente do" +
      body.delegacia
  );
  // Add more text into the paragraph if you wish
  paragraph.addRun(new docx.TextRun("Lorem Ipsum Foo Bar"));
  doc.addParagraph(paragraph);

  // Used to export the file into a .docx file
  var packer = new docx.Packer();
  packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("My First banana.docx", buffer);
  });
}
