var fs = require("fs");
var docx = require("docx");

export function generateDoc(body) {
  // Create document
  var doc = new docx.Document();

  // Natureza
  const naturezaParagraph = new docx.Paragraph().center();
  const naturezaParagraphText = new docx.TextRun(
    "Natureza da Ocorrência: " + body.natureza
  )
    .bold()
    .size(30)
    .font("Calibri");
  naturezaParagraph.addRun(naturezaParagraphText);
  doc.addParagraph(naturezaParagraph);

  // Cabeçalho
  var cabecalhoParagraph = new docx.Paragraph();
  var textoCabecalho = new docx.TextRun(
    "Em " +
      body.dataAtendimento +
      " , no Instituto de Criminalística da Superintendência da Polícia Técnico-Científica da Secretaria da Segurança Pública do Estado de São Paulo, em conformidade com o disposto no artigo 178 do Decreto Lei nº 3.689, de 3 de outubro de 1941, o Diretor deste Instituto, Dr. Maurício da Silva Lazzarin, designou o Perito Criminal Dr. Rodrigo Barbalat Viana para proceder aos exames periciais em face da requisição de exame expedida pela autoridade competente do" +
      body.delegacia
  );
  // Add more text into the paragraph if you wish
  cabecalhoParagraph.addRun(textoCabecalho.break());
  doc.addParagraph(cabecalhoParagraph);

  // Objetivo
  var emptyBreak = new docx.Paragraph("");
  doc.addParagraph(emptyBreak);

  var objetivoHeading = new docx.Paragraph();
  var objetivoHeadingText = new docx.TextRun("I - OBJETIVO")
    .bold()
    .size(30)
    .font("Calibri");
  objetivoHeading.addRun(objetivoHeadingText);

  var objetivoParagraph = new docx.Paragraph();
  var textoObjetivo = new docx.TextRun("o Objetivo eh BATATA");

  objetivoParagraph.addRun(textoObjetivo.break());
  doc.addParagraph(objetivoHeading);
  doc.addParagraph(objetivoParagraph);

  // Do Veículo e dos Exames
  doc.addParagraph(emptyBreak);

  var doVeiculoDosExamesHeading = new docx.Paragraph();
  var doVeiculoDosExamesHeadingText = new docx.TextRun(
    "II - DO VEÍCULO E DOS EXAMES"
  )
    .bold()
    .size(30)
    .font("Calibri");
  doVeiculoDosExamesHeading.addRun(doVeiculoDosExamesHeadingText);

  var doVeiculoDosExamesParagraph = new docx.Paragraph();

  doc.addParagraph(doVeiculoDosExamesHeading);

  var textoDoVeiculoDosExames = new docx.TextRun("o veículo é XXXX");
  doVeiculoDosExamesParagraph.addRun(textoDoVeiculoDosExames.break());
  doc.addParagraph(doVeiculoDosExamesParagraph);

  // Considerações Finais
  doc.addParagraph(emptyBreak);

  var consideracoesHeading = new docx.Paragraph();
  var consideracoesHeadingText = new docx.TextRun("III - CONSIDERAÇÕES FINAIS")
    .bold()
    .size(30)
    .font("Calibri");
  consideracoesHeading.addRun(consideracoesHeadingText);
  doc.addParagraph(consideracoesHeading);

  var consideracoesParagraph = new docx.Paragraph();

  var textoRelatar = new docx.TextRun("Era o que havia a relatar.");
  consideracoesParagraph.addRun(textoRelatar.break());

  var textoConsideracoes = new docx.TextRun(
    "Este Laudo vai digitado em quatro (04) folhas e assinado digitalmente, dele ficando cópia digital arquivada. Ilustram-no quatro (04) fotografias legendadas e digitalmente inseridas, de responsabilidade do Fotógrafo Técnico Pericial Fábio Alves Penna Romano."
  );
  consideracoesParagraph.addRun(textoConsideracoes.break().break());
  doc.addParagraph(consideracoesParagraph);

  //Data Assinatura
  doc.addParagraph(emptyBreak);
  var dataAssinatura = new docx.Paragraph(
    "São Sebastião, 31 de fevereiro de 2027"
  ).right();
  doc.addParagraph(dataAssinatura);

  // Id Perito
  doc.addParagraph(emptyBreak);
  var IdPerito = new docx.Paragraph("RODRIGO BARBALAT VIANA").center();
  doc.addParagraph(IdPerito);
  var peritoCriminal = new docx.Paragraph("PERITO CRIMINAL").center();
  doc.addParagraph(peritoCriminal);

  // Used to export the file into a .docx file
  var packer = new docx.Packer();
  packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("My First Batata.docx", buffer);
  });
}
