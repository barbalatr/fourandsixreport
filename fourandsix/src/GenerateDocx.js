var fs = require("fs");
var docx = require("docx");

export function generateDoc(body) {
  // Create document
  var doc = new docx.Document();
  var emptyBreak = new docx.Paragraph("");

  // Header
  doc.Header;
  doc.Header.createParagraph("SECRETARIA DA SEGURANÇA PÚBLICA").center();
  doc.Header.createParagraph(
    "SUPERINTENDÊNCIA DA POLÍCIA TÉCNICO-CIENTÍFICA"
  ).center();
  doc.Header.createParagraph("INSTITUTO DE CRIMINALÍSTICA").center();
  doc.Header.createParagraph("NÚCLEO DE SÃO JOSÉ DOS CAMPOS").center();
  doc.Header.createParagraph(
    "EQUIPE DE PERÍCIAS CRIMINALÍSTICAS DE SÃO SEBASTIÃO"
  ).center();
  //Footer
  doc.Footer;
  doc.Footer.createParagraph("Laudo Pericial nº " + body.requisicao).center();
  doc.Footer.createParagraph()
    .center()
    .addRun(new docx.TextRun("Página ").pageNumber())
    .addRun(new docx.TextRun(" de ").numberOfTotalPages());

  // Natureza
  doc.addParagraph(emptyBreak);
  const naturezaParagraph = new docx.Paragraph().center();
  const naturezaParagraphText = new docx.TextRun(
    "Natureza da Ocorrência: " + body.natureza
  )

    .size(24)
    .font("Spranq eco sans");
  naturezaParagraph.addRun(naturezaParagraphText);
  doc.addParagraph(naturezaParagraph);

  // Laudo Pericial
  doc.addParagraph(emptyBreak);
  const laudoPericial = new docx.Paragraph().center();
  const laudoPericialText = new docx.TextRun("LAUDO PERICIAL")
    .bold()
    .size(24)
    .font("Spranq eco sans");
  laudoPericial.addRun(laudoPericialText);
  doc.addParagraph(laudoPericial);

  // Cabeçalho
  doc.addParagraph(emptyBreak);
  var cabecalhoParagraph = new docx.Paragraph().justified();
  var textoCabecalho = new docx.TextRun(
    "Em " +
      body.dataAtendimento +
      " , no Instituto de Criminalística da Superintendência da Polícia Técnico-Científica da Secretaria da Segurança Pública do Estado de São Paulo, em conformidade com o disposto no artigo 178 do Decreto Lei nº 3.689, de 3 de outubro de 1941, o Diretor deste Instituto, Dr. Maurício da Silva Lazzarin, designou o Perito Criminal Dr. Rodrigo Barbalat Viana para proceder aos exames periciais em face da requisição de exame expedida pela autoridade competente do(a) " +
      body.delegacia +
      "."
  )
    .size(24)
    .font("Spranq eco sans");
  // Add more text into the paragraph if you wish
  cabecalhoParagraph.addRun(textoCabecalho);
  doc.addParagraph(cabecalhoParagraph);

  // Objetivo

  doc.addParagraph(emptyBreak);

  var objetivoHeading = new docx.Paragraph();
  var objetivoHeadingText = new docx.TextRun("I - OBJETIVO")
    .bold()
    .size(24)
    .font("Spranq eco sans");
  objetivoHeading.addRun(objetivoHeadingText);

  var objetivoParagraph = new docx.Paragraph();
  var textoObjetivo = new docx.TextRun(
    "Visa o presente trabalho, conforme se depreende da requisição de exames elaborada pela Autoridade Policial, efetuar exames periciais objetivando a realização de Vistoria Veicular."
  )
    .size(24)
    .font("Spranq eco sans");

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
    .size(24)
    .font("Spranq eco sans");
  doVeiculoDosExamesHeading.addRun(doVeiculoDosExamesHeadingText);

  var doVeiculoDosExamesParagraph = new docx.Paragraph();

  doc.addParagraph(doVeiculoDosExamesHeading);

  var textoDoVeiculoDosExames = new docx.TextRun(
    "Nas condições em que foi apresentado para a perícia, foi examinado um veículo do tipo " +
      body.tipoVeiculo +
      ", da marca " +
      body.marcaVeiculo +
      ", modelo " +
      body.modeloVeiculo +
      " , da cor " +
      body.corVeiculo +
      ", de placas " +
      body.placa +
      ", e que quando da realização dos exames apresentava: "
  )
    .size(24)
    .font("Spranq eco sans");
  doVeiculoDosExamesParagraph.addRun(textoDoVeiculoDosExames.break());
  doc.addParagraph(doVeiculoDosExamesParagraph);

  doc.addParagraph(emptyBreak);

  var dano1Paragraph = new docx.Paragraph().bullet();
  var dano1 = new docx.TextRun("Vestígios de maça")
    .size(24)
    .font("Spranq eco sans");
  dano1Paragraph.addRun(dano1);
  doc.addParagraph(dano1Paragraph);

  var dano2Paragraph = new docx.Paragraph().bullet();
  var dano2 = new docx.TextRun("abacate").size(24).font("Spranq eco sans");
  dano2Paragraph.addRun(dano2);
  doc.addParagraph(dano2Paragraph);

  var dano3Paragraph = new docx.Paragraph().bullet();
  var dano3 = new docx.TextRun("banana").size(24).font("Spranq eco sans");
  dano3Paragraph.addRun(dano3);
  doc.addParagraph(dano3Paragraph);

  doc.addParagraph(emptyBreak);
  var sistemaSegurancaParagraph = new docx.Paragraph();
  var sistemaSegurancaText = new docx.TextRun(
    "Quando da realização dos exames periciais, seus sistemas de segurança para o tráfego se encontravam:"
  )
    .size(24)
    .font("Spranq eco sans");
  sistemaSegurancaParagraph.addRun(sistemaSegurancaText);
  doc.addParagraph(sistemaSegurancaParagraph);

  // Considerações Finais
  doc.addParagraph(emptyBreak);

  var consideracoesHeading = new docx.Paragraph();
  var consideracoesHeadingText = new docx.TextRun("III - CONSIDERAÇÕES FINAIS")
    .bold()
    .size(24)
    .font("Spranq eco sans");
  consideracoesHeading.addRun(consideracoesHeadingText);
  doc.addParagraph(consideracoesHeading);

  var consideracoesParagraph = new docx.Paragraph();
  var consideracoesParagraph1 = new docx.Paragraph().justified();
  var textoRelatar = new docx.TextRun("Era o que havia a relatar.")
    .size(24)
    .font("Spranq eco sans");
  consideracoesParagraph.addRun(textoRelatar.break());

  var textoConsideracoes = new docx.TextRun(
    "As fotografias presentes neste laudo são de responsabilidade técnica de " +
      body.fotografo +
      ". O laudo original foi assinado digitalmente nos termos da M.P. 2200-2/2001 de 24/08/2001 e encontra-se arquivado eletronicamente nas bases do Sistema Gestor de Laudos (GDL) da Superintendência da Polícia Técnico-Científica do Estado de São Paulo"
  )
    .size(20)
    .font("Spranq eco sans");

  consideracoesParagraph1.addRun(textoConsideracoes.break());
  doc.addParagraph(consideracoesParagraph);
  doc.addParagraph(consideracoesParagraph1);

  //Data Assinatura
  doc.addParagraph(emptyBreak);
  var dataAssinatura = new docx.Paragraph(
    "São Sebastião, " + body.dataAtendimento
  ).right();
  doc.addParagraph(dataAssinatura);

  // Id Perito
  doc.addParagraph(emptyBreak);
  var IdPerito = new docx.Paragraph("RODRIGO BARBALAT VIANA").center();
  doc.addParagraph(IdPerito);
  var peritoCriminal = new docx.Paragraph("PERITO CRIMINAL").center();
  doc.addParagraph(peritoCriminal);

  // Used to export the file into a .docx file
  const nomeArquivo = "Laudo - Req. " + body.requisicao + ".docx";
  var packer = new docx.Packer();
  packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync(nomeArquivo, buffer);
  });
}
