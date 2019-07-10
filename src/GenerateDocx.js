var fs = require("fs");
var docx = require("docx");
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

export function bodyToSections(body) {
  const result = [];

  // Conteúdo Vistoria Veicular
  if (body.natureza === "Vistoria Veicular") {
    result.push({
      type: "header",
      content: "I - OBJETIVO"
    });

    result.push({
      type: "paragraph",
      content:
        "Visa o presente trabalho, conforme se depreende da requisição de exames elaborada pela Autoridade Policial, efetuar exames periciais objetivando a constatação de danos e verificação de sistemas de segurança para o tráfego."
    });
    result.push({
      type: "header",
      content: "II - DO VEÍCULO E DOS EXAMES"
    });
    result.push({
      type: "paragraph",
      content:
        "Nas condições em que foi apresentado à perícia" +
        (body.isLocalIC
          ? " na sede da Equipe de Perícias Criminalísticas de São Sebastião"
          : "") +
        ", foi examinado um veículo do tipo " +
        body.tipoVeiculo +
        ", da marca " +
        body.marcaVeiculo +
        ", modelo " +
        body.modeloVeiculo +
        ", da cor " +
        body.corVeiculo +
        ", de placas " +
        body.placa +
        ", e que quando da realização dos exames apresentava: "
    });
    result.push({
      type: "bullet",
      content: body.danosVeiculo.map(dano => {
        return (
          "Vestígios de" +
          (dano.amolgamentoVeiculo &&
          dano.atritamentoVeiculo &&
          dano.fraturaVeiculo
            ? " amolgamento, atritamento e fratura"
            : dano.amolgamentoVeiculo && dano.atritamentoVeiculo
            ? " amolgamento e atritamento"
            : dano.amolgamentoVeiculo && dano.fraturaVeiculo
            ? " amolgamento e fratura"
            : dano.atritamentoVeiculo && dano.fraturaVeiculo
            ? " atritamento e fratura"
            : dano.amolgamentoVeiculo
            ? " amolgamento"
            : dano.atritamentoVeiculo
            ? " atritamento"
            : dano.fraturaVeiculo
            ? " fratura"
            : "") +
          " de aspecto(s) " +
          dano.aspectoDano +
          "(s)" +
          " localizados no(a) " +
          dano.localizacaoDanos +
          " e orientados " +
          (dano.orientacaoDanosLateral !== ""
            ? dano.orientacaoDanosLateral + " e "
            : "") +
          dano.orientacaoDanosLongitudinal +
          dano.orientacaoDanosVertical +
          " envolvendo principalmente: " +
          (dano.farolDireito ? " farol direito," : "") +
          (dano.capo ? " capô," : "") +
          (dano.paraChoques ? " para-choque," : "") +
          (dano.lanternaEsquerda ? " lanterna esquerda," : "") +
          (dano.lanternaDireita ? " lanterna direita," : "") +
          (dano.portalMalas ? " portal malas," : "") +
          (dano.portaDianteira ? " porta dianteira," : "") +
          (dano.portaTraseira ? " porta traseira," : "") +
          (dano.paralamaDianteiro ? " paralama dianteiro," : "") +
          (dano.paralamaTraseiro ? " paralama traseiro," : "") +
          (dano.farol ? " farol," : "") +
          (dano.painel ? " painel," : "") +
          (dano.guidao ? " guidão," : "") +
          (dano.paralama ? " paralama," : "") +
          (dano.bengala ? " bengala," : "") +
          (dano.seta ? " seta," : "") +
          (dano.tanqueCombunstivel ? " tanque combunstivel," : "") +
          (dano.espelhoRetrovisor ? " espelho retrovisor," : "") +
          (dano.tanqueCombunstivel ? " tanque de combunstivel," : "") +
          (dano.motor ? " motor," : "") +
          (dano.radiador ? " radiador," : "") +
          (dano.sistemaTransmissao ? " sistema de transmissao," : "") +
          (dano.carenagem ? " carenagem," : "") +
          (dano.escapamento ? " escapamento," : "") +
          (dano.luzFreio ? " luz freio" : "")
        ).replace(/.$/, ".");
      })
    });

    result.push({
      type: "paragraph",
      content: body.isVidrosVeiculoOk
        ? "Todos os vidros do veículo se encontravam sem avarias no momento da realização dos exames."
        : body.detalhesVidrosVeiculo
    });
    result.push({
      type: "paragraph",
      content: body.isPneuOk
        ? "Todos os pneumáticos do veículo se encontravam em bom estado de conservação no momento da realização dos exames."
        : "Foi verificado que os pneumáticos do veículo se encontravam nas seguintes condições no momento da realização do exame:"
    });
    if (body.isPneuOk !== true && body.tipoVeiculo === "automóvel") {
      result.push({
        type: "bullet",
        content: [
          "Pneumático dianteiro direito " + body.pneuDianteiroDireito + ".",
          "Pneumático dianteiro esquerdo " + body.pneuDianteiroEsquerdo + ".",
          "Pneumático traseiro direito " + body.pneuTraseiroDireito + ".",
          "Pneumático traseiro esquerdo " + body.pneuTraseiroEsquerdo + "."
        ]
      });
    }
    if (body.isPneuOk !== true && body.tipoVeiculo === "motocicleta") {
      result.push({
        type: "bullet",
        content: [
          "Pneumático dianteiro " + body.pneuDianteiro + ".",
          "Pneumático traseiro " + body.pneuTraseiro + "."
        ]
      });
    }
    result.push({
      type: "paragraph",
      content:
        "Através da realização de exame estático, foi verificado que seus sistemas de segurança para tráfego se encontravam nas seguintes condições:"
    });
    result.push({
      type: "bullet",
      content: [
        "Freios: " + body.freios + ". " + body.motivoFreio,
        "Direção: " + body.direcao + ". " + body.motivoDirecao,
        "Parte Elétrica: " +
          body.parteEletrica +
          (body.parteEletrica === "funcionando parcialmente"
            ? ". " + body.motivoParteEletrica
            : body.parteEletrica === "não foi possível verificar"
            ? " em razão da " + body.motivoParteEletrica + "."
            : ".")
      ]
    });
    result.push({
      type: "header",
      content: "III - CONSIDERAÇÕES FINAIS"
    });
    result.push({
      type: "paragraph",
      content: "Era o que havia a relatar."
    });
  }

  // Conteúdo Crime Ambiental (Indireto)
  if (body.natureza === "Crime Ambiental (Indireto)") {
    result.push({
      type: "header",
      content: "I - OBJETIVO"
    });

    result.push({
      type: "paragraph",
      content:
        "Visa o presente trabalho, conforme se depreende da requisição de exames elaborada pela Autoridade Policial, efetuar exames periciais objetivando: " +
        body.objetivo +
        "."
    });
    result.push({
      type: "header",
      content: "II - DO LOCAL E DOS EXAMES"
    });
    result.push({
      type: "paragraph",
      content:
        "Trata-se de uma área situada " +
        body.endereco +
        " " +
        body.enderecoNumero +
        ", no Bairro " +
        body.enderecoBairro +
        ", no município de " +
        body.enderecoCidade +
        "."
    });
    result.push({
      type: "paragraph",
      content:
        "Conforme o Boletim de Ocorrência Ambiental de nº " +
        body.BOPamb +
        " de " +
        body.dataBOPamb +
        ", a referida área corresponde" +
        body.tamanhoArea +
        " ha, é caracterizada como de especial preservação, do bioma Mata Atlântica, a qual está situada " +
        body.areaProtecaoAmbiental +
        " e fora de Unidade de Conservação (U.C.) ou Zona de Amortecimento (Z.A.), na qual, quando da referida autuação, foi constatada degradação ambiental mediante " +
        body.medianteAmbiental +
        " de vegetação nativa típica de " +
        body.vegetacaoTipica +
        " " +
        body.ordemAmbiental +
        " em estágio " +
        body.estagioRecuperacao +
        " de regeneração, sem a devida licença ou autorização do órgão ambiental competente."
    });

    result.push({
      type: "header",
      content: "III - CONSIDERAÇÕES FINAIS"
    });
    result.push({
      type: "paragraph",
      content:
        "Cumpre consignar que por ter sido solicitado e realizado em data posterior aos fatos, este exame se trata de um levantamento indireto de local, o qual foi baseado no Boletim de Ocorrência Ambiental de nº " +
        body.BOPamb +
        " de " +
        body.dataBOPamb.substring(8, 10) +
        " de " +
        meses[body.dataBOPamb.substring(5, 7)] +
        " de " +
        body.dataAtendimento.substring(0, 4) +
        "."
    });
    result.push({
      type: "paragraph",
      content: "Era o que havia a relatar."
    });
  }

  // Conteúdo Furto Qualificado
  if (body.natureza === "Furto Qualificado") {
    result.push({
      type: "header",
      content: "I - OBJETIVO"
    });
    result.push({
      type: "paragraph",
      content:
        "Visa o presente trabalho, conforme se depreende da requisição de exames elaborada pela Autoridade Policial:  " +
        body.objetivo +
        "."
    });
    result.push({
      type: "header",
      content: "II - DO LOCAL E DOS EXAMES"
    });

    result.push({
      type: "paragraph",
      content:
        "Trata-se de um imóvel de uso " +
        body.usoImovel +
        " localizado na" +
        body.endereco +
        " " +
        body.enderecoNumero +
        ", no Bairro " +
        body.enderecoBairro +
        ", no município de " +
        body.enderecoCidade +
        ". " +
        "A edificação existente no local apresentava as seguintes características: construída em " +
        body.materialConstrucao +
        ", vedada por " +
        body.vedacaoTerreno +
        ", " +
        (body.pavimentos === "térrea"
          ? "térrea, "
          : "com " + body.numeroPavimentos + " pavimentos, ") +
        body.vizinhancaImovel +
        ", " +
        body.nivelImovel +
        ", " +
        body.alinhamentoImovel +
        ", " +
        (body.isApartamento !== "Sim"
          ? body.passagemImovel + ", precedida por " + body.precedidoImovel
          : "") +
        " e vedada em sua região frontal por " +
        body.vedacaoFrontalTerreno +
        " interrompidos por " +
        body.interrompidoPor +
        "."
    });
    {
      body.isApartamento === "Sim" &&
        result.push({
          type: "paragraph",
          content:
            "Ofereceu interesse pericial o apartamento de número " +
            body.numeroApartamento +
            " localizado no " +
            body.pavimentoInteresse +
            "º pavimento. "
        });
    }

    result.push({
      type: "header",
      content: "III - DO PROVÁVEL ACESSO DELITUOSO"
    });
    result.push({
      type: "paragraph",
      content:
        "Quando da ocasião dos fatos, tudo indica que o acesso delituoso ao interior do imóvel tenha ocorrido através de " +
        body.acessoTerreno +
        (body.acessoTerreno === "escalada"
          ? " do " +
            body.escaladaVedacao +
            ", o qual media aproximadamente " +
            body.alturaEscalada +
            " m de altura"
          : ", mais precisamente do " +
            body.objetoVedacao +
            " pelo emprego de " +
            body.medianteAcessoTerreno) +
        ", seguido de rompimento de obstáculo mediante " +
        body.medianteAcessoImovel +
        "."
    });

    result.push({
      type: "header",
      content: "IV - CONSIDERAÇÕES FINAIS"
    });
    result.push({
      type: "paragraph",
      content:
        "Os exames periciais foram acompanhados por " +
        body.nomeAcompanhante +
        ", RG: " +
        body.RGAcompanhante +
        ". Cumpre consignar que por ter sido solicitado e realizado em data posterior aos fatos, este exame se trata de um levantamento indireto de local."
    });
    result.push({
      type: "paragraph",
      content: "Era o que havia a relatar."
    });
  }
  return result;
}

export function generateDoc(body) {
  // Create document
  var doc = new docx.Document();
  // Create custom break
  var emptyBreak = new docx.Paragraph();
  var emptyBreakText = new docx.TextRun("").size(24).font("Spranq eco sans");
  emptyBreak.addRun(emptyBreakText);

  // Header
  doc.Header;
  doc.Header.createImage(fs.readFileSync("./src/imagemteste.jpeg"), 650, 200);

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
  const naturezaParagraphText = new docx.TextRun("Natureza: " + body.natureza)

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
      ", no Instituto de Criminalística da Superintendência da Polícia Técnico-Científica da Secretaria da Segurança Pública do Estado de São Paulo, em conformidade com o disposto no artigo 178 do Decreto Lei nº 3.689, de 3 de outubro de 1941, o Diretor deste Instituto, Dr. Maurício da Silva Lazzarin, designou o Perito Criminal Dr. Lucas Gabriel Leite Fernandez Pollito para proceder aos exames periciais em face da requisição de exame expedida pela autoridade competente do(a) " +
      body.delegacia +
      "."
  )
    .size(24)
    .font("Spranq eco sans");
  cabecalhoParagraph.addRun(textoCabecalho);
  doc.addParagraph(cabecalhoParagraph);
  doc.addParagraph(emptyBreak);

  //Generate Chapters
  const sections = bodyToSections(body);
  sections.forEach(({ type, content }) => {
    if (type === "header") {
      var heading = new docx.Paragraph();
      var headingText = new docx.TextRun(content)
        .bold()
        .size(24)
        .font("Spranq eco sans");
      heading.addRun(headingText);
      doc.addParagraph(heading);
      doc.addParagraph(emptyBreak);
    } else if (type === "paragraph") {
      var paragraphParagraph = new docx.Paragraph().justified().indent(100, 0);
      var paragraphParagraphText = new docx.TextRun(content)
        .size(24)
        .font("Spranq eco sans");
      paragraphParagraph.addRun(paragraphParagraphText);
      doc.addParagraph(paragraphParagraph);
      doc.addParagraph(emptyBreak);
    } else if (type === "bullet") {
      content.forEach(content => {
        var bulletParagraph = new docx.Paragraph().bullet();
        var bulletText = new docx.TextRun(content)
          .size(24)
          .font("Spranq eco sans");
        bulletParagraph.addRun(bulletText);
        doc.addParagraph(bulletParagraph);
      });
      doc.addParagraph(emptyBreak);
    }
  });

  //Disclaimer
  var disclaimerParagraph = new docx.Paragraph().justified();
  const disclaimerText = new docx.TextRun(
    "O laudo original foi assinado digitalmente nos termos da M.P. 2200-2/2001 de 24/08/2001 e encontra-se arquivado eletronicamente nas bases do Sistema Gestor de Laudos (GDL) da Superintendência da Polícia Técnico-Científica do Estado de São Paulo."
  )
    .size(20)
    .font("Spranq eco sans");
  disclaimerParagraph.addRun(disclaimerText);
  doc.addParagraph(disclaimerParagraph);

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
  const IdPeritoText = new docx.TextRun("Lucas Gabriel Leite Fernandez Pollito")
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

  var packer = new docx.Packer();
  return packer.toBase64String(doc);
}
