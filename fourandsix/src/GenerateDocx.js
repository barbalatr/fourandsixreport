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
  const diaAtendimento = body.dataAtendimento.substring(8, 10);
  const mesAtendimentoNumero = body.dataAtendimento.substring(5, 7);
  const meses = {
    "01": "janeiro",
    "02": "fevereiro",
    "03": "março",
    "04": "abril",
    "05": "maio",
    "06": "junho",
    "07": "julho",
    "08": "agosto",
    "09": "setembro",
    "10": "outubro",
    "11": "novembro",
    "12": "dezembro"
  };
  const mesAtendimentoNome = meses[mesAtendimentoNumero];
  const anoAtendimento = body.dataAtendimento.substring(0, 4);

  doc.addParagraph(emptyBreak);

  var cabecalhoParagraph = new docx.Paragraph().justified();
  var textoCabecalho = new docx.TextRun(
    "Em " +
      diaAtendimento +
      " de " +
      mesAtendimentoNome +
      " de " +
      anoAtendimento +
      ", no Instituto de Criminalística da Superintendência da Polícia Técnico-Científica da Secretaria da Segurança Pública do Estado de São Paulo, em conformidade com o disposto no artigo 178 do Decreto Lei nº 3.689, de 3 de outubro de 1941, o Diretor deste Instituto, Dr. Maurício da Silva Lazzarin, designou o Perito Criminal Dr. Rodrigo Barbalat Viana para proceder aos exames periciais em face da requisição de exame expedida pela autoridade competente do(a) " +
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

  var objetivoParagraph = new docx.Paragraph().justified();
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

  var doVeiculoDosExamesParagraph = new docx.Paragraph().justified();

  doc.addParagraph(doVeiculoDosExamesHeading);

  const localVistoria = body.isLocalIC
    ? " na sede da Equipe de Perícias Criminalísticas de São Sebastião"
    : "";

  var textoDoVeiculoDosExames = new docx.TextRun(
    "Nas condições em que foi apresentado à perícia" +
      localVistoria +
      ", foi examinado um veículo do tipo " +
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

  // Sistemas de Segurança
  doc.addParagraph(emptyBreak);
  var sistemaSegurancaParagraph = new docx.Paragraph();
  var sistemaSegurancaText = new docx.TextRun(
    "Através da realização de exame estático, foi verificado que seus sistemas de segurança para tráfego se encontravam nas seguintes condições:"
  )
    .size(24)
    .font("Spranq eco sans");
  sistemaSegurancaParagraph.addRun(sistemaSegurancaText);

  var sistemaSegurancaParagraph1 = new docx.Paragraph().bullet();
  var freioText = new docx.TextRun(
    "Freio dianteiro: " + body.freios + ". " + body.motivoFreio
  )
    .size(24)
    .font("Spranq eco sans");
  sistemaSegurancaParagraph1.addRun(freioText);
  var sistemaSegurancaParagraph2 = new docx.Paragraph().bullet();
  var direcaoText = new docx.TextRun(
    "Direção: " + body.direcao + ". " + body.motivoDirecao
  )
    .size(24)
    .font("Spranq eco sans");
  sistemaSegurancaParagraph2.addRun(direcaoText);

  var sistemaSegurancaParagraph3 = new docx.Paragraph().bullet();
  const xpto =
    body.parteEletrica === "funcionando parcialmente"
      ? ". " + body.motivoParteEletrica
      : body.parteEletrica === "não foi possível verificar"
      ? " em razão da " + body.motivoParteEletrica + "."
      : ".";
  var parteEletricaText = new docx.TextRun(
    "Parte Elétrica: " + body.parteEletrica + xpto
  )
    .size(24)
    .font("Spranq eco sans");
  sistemaSegurancaParagraph3.addRun(parteEletricaText);

  doc.addParagraph(sistemaSegurancaParagraph);
  doc.addParagraph(emptyBreak);
  doc.addParagraph(sistemaSegurancaParagraph1);
  doc.addParagraph(sistemaSegurancaParagraph2);
  doc.addParagraph(sistemaSegurancaParagraph3);

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
    " O laudo original foi assinado digitalmente nos termos da M.P. 2200-2/2001 de 24/08/2001 e encontra-se arquivado eletronicamente nas bases do Sistema Gestor de Laudos (GDL) da Superintendência da Polícia Técnico-Científica do Estado de São Paulo."
  )
    .size(20)
    .font("Spranq eco sans")
    .break();

  consideracoesParagraph1.addRun(textoConsideracoes);

  doc.addParagraph(consideracoesParagraph);
  doc.addParagraph(consideracoesParagraph1);

  //Data Assinatura
  doc.addParagraph(emptyBreak);
  var dataAssinatura = new docx.Paragraph().right();
  const dataAssinaturaText = new docx.TextRun(
    "São Sebastião, " +
      diaAtendimento +
      " de " +
      mesAtendimentoNome +
      " de " +
      anoAtendimento +
      "."
  )
    .size(24)
    .font("Spranq eco sans");
  dataAssinatura.addRun(dataAssinaturaText);
  doc.addParagraph(dataAssinatura);

  // Id Perito
  doc.addParagraph(emptyBreak);
  var idPeritoParagraph = new docx.Paragraph().center();
  const IdPeritoText = new docx.TextRun("RODRIGO BARBALAT VIANA")
    .size(24)
    .font("Spranq eco sans");
  const peritoCriminal = new docx.TextRun("PERITO CRIMINAL")
    .size(24)
    .font("Spranq eco sans")
    .break();
  idPeritoParagraph.addRun(IdPeritoText);
  idPeritoParagraph.addRun(peritoCriminal);

  doc.addParagraph(idPeritoParagraph);

  // Used to export the file into a .docx file
  const nomeArquivo = "Laudo - Req. " + body.requisicao + ".docx";
  var packer = new docx.Packer();
  packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync(nomeArquivo, buffer);
  });
}
