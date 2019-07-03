// @flow
export const Ocorrencia = {
  // Local
  localImediato: null,
  // Local[]
  locais: [],
  // string
  timestampAcionado: "",
  // string
  timestampChegada: "",
  // string
  timestampPartida: "",
  // Delegado
  delegadoRequisitante: null,
  // (CrimeAmbiental | DanoPatrimonial)[]
  crimes: []
};
export const Local = {
  // TipoDeLogradouro
  tipoLogradouro: null,
  // string
  endereco: "",
  // string
  observacao: "",
  // string
  numero: "",
  // string
  bairro: "",
  // Municipio
  municipio: "",
  // ?TipoDeLocal
  tipo: null,
  // ?AlinhamentoDeLocal
  alinhamento: null,
  // ?Construcao
  construcao: null,
  // number
  pavimentos: 0,
  // boolean
  garagemNoSubsolo: false,
  // Isolamento
  isolamento: null
};
export const CrimeAmbiental = {
  // Natureza
  natureza: null,
  // Qualificadora[]
  qualificadora: [],
  // Mediante
  mediante: [],
  // numero
  boAssociado: null,
  // string
  dataBoAssociado: "",
  // string
  tamanhoDaArea: "",
  // App
  app: null,
  // MedianteAmbiental[]
  mediante: []
};

// Natureza do Crime
export const Homicidio = "Homicídio";
export const MorteSuspeita = "Morte Suspeita";
export const CrimeAmbientalIndireto = "Crime Ambiental (Indireto)";
export const Vistoria = "Vistoria Veicular";
export const DanoPatrimonial = "Dano Patrimonial";
export const Furto = "Furto";
export const FurtoQualificado = "Furto Qualificado";
export const Natureza = [Vistoria, CrimeAmbientalIndireto];

// Delegacias do Litoral Norte
//TODO adicionar DDM em todos
export const DelPolCaraguatatuba1 = "01º DP de Caraguatatuba";
export const DelPolCaraguatatuba2 = "02º DP de Caraguatatuba";
export const DelPolCaraguatatuba = "Delegacia de Polícia de Caraguatatuba";
export const DelPolIlhabela = "Delegacia de Polícia de Ilhabela";
export const DelPolSeccional = "Delegacia Seccional de São Sebastião";
export const DelPolSaoSebastiao1 = "01º DP de São Sebastião";
export const DelPolSaoSebastiao2 = "02º DP de São Sebastião";
export const DelPolDIGDISE = "DIG/DISE de São Sebastião";
export const DelPolDDMSaoSebastiao = "DDM de São Sebastião";
export const DelPolUbatuba = "Del. Pol. Ubatuba";
export const Delegacia = [
  DelPolCaraguatatuba1,
  DelPolCaraguatatuba2,
  DelPolCaraguatatuba,
  DelPolIlhabela,
  DelPolSeccional,
  DelPolSaoSebastiao1,
  DelPolSaoSebastiao2,
  DelPolDIGDISE,
  DelPolDDMSaoSebastiao,
  DelPolUbatuba
];

export const Ubatuba = "Ubatuba";
export const Caraguatatuba = "Caraguatatuba";
export const Ilhabela = "Ilhabela";
export const SaoSebastiao = "São Sebastião";
export const Municipios = [Ubatuba, Caraguatatuba, Ilhabela, SaoSebastiao];

// Fotografos
export const Ana = "Ana Cristina de Toledo Romano";
export const Fabio = "Fabio Alves Penna Romano";
export const Gilberto = "Gilberto Santana Bardacim";
export const Mauro = "Mauro Sérgio de Souza";
export const Paulo = "Paulo Guimarães Júnior";
export const Silvia = "Silvia Jerger Rocha";
export const Ubirajara = "Ubirajara Araújo Rofino";
export const Fotografos = [
  Ana,
  Fabio,
  Gilberto,
  Mauro,
  Paulo,
  Silvia,
  Ubirajara
];

export const Residencial = "residencial";
export const Comercial = "comercial";
export const Publico = "público";
export const Misto = "misto";
export const UsoImovel = [Residencial, Comercial, Publico, Misto];

export const ComRecuo = "com recúo";
export const SemRecuo = "sem recúo";
export const AlinhamentoImovel = [ComRecuo, SemRecuo];

export const Abaixo = "abaixo do nível";
export const Acima = "acima do nível";
export const MesmoNivel = "no mesmo nível";
export const NivelImovel = [Abaixo, Acima, MesmoNivel];

export const Alvenaria = "alvenaria";
export const Madeira = "madeira";
export const MaterialConstrucao = [Alvenaria, Madeira];

export const Automovel = "automóvel";
export const Caminhao = "caminhão";
export const Onibus = "ônibus";
export const Motocicleta = "motocicleta";
export const TipoVeiculo = [Automovel, Caminhao, Motocicleta];

export const AlfaRomeo = "Alfa Romeo";
export const AstonMartin = "Aston Martin";
export const Audi = "Audi";
export const BMW = "BMW";
export const Bugre = "Bugre";
export const Bugway = "Bugway";
export const Chery = "Chery";
export const Chevrolet = "Chevrolet";
export const Chrysler = "Chrysler";
export const Citroen = "Citroën";
export const Daewoo = "Daewoo";
export const Dodge = "Dodge";
export const Ferrari = "Ferrari";
export const FIAT = "FIAT";
export const Ford = "Ford";
export const GMC = "GMC";
export const Gurgel = "Gurgel";
export const Honda = "Honda";
export const Hyundai = "Hyundai";
export const IVECO = "IVECO";
export const JAC = "JAC";
export const Jaguar = "Jaguar";
export const Jeep = "Jeep";
export const KIA = "KIA";
export const Lamborghini = "Lamborghini";
export const LandRover = "Land Rover";
export const Lexus = "Lexus";
export const Mazda = "Mazda";
export const MercedesBenz = "Mercedez-Benz";
export const Mitsubishi = "Mitsubishi";
export const Nissan = "Nissan";
export const Pegeout = "Pegeout";
export const Porsche = "Porsche";
export const Renault = "Renault";
export const Shelby = "Shelby";
export const Subaru = "Subaru";
export const Suzuki = "Suzuki";
export const Toyota = "Toyota";
export const Troller = "Troller";
export const Volkswagen = "Volkswagen";
export const Volvo = "Volvo";
export const MarcaCarro = [
  Chevrolet,
  Citroen,
  FIAT,
  Ford,
  Honda,
  Jeep,
  KIA,
  Hyundai,
  Mitsubishi,
  Pegeout,
  Renault,
  Volkswagen,
  "--------------",
  AlfaRomeo,
  AstonMartin,
  Audi,
  BMW,
  Bugre,
  Bugway,
  Chery,
  Chrysler,
  Daewoo,
  Dodge,
  Ferrari,
  GMC,
  Gurgel,
  IVECO,
  JAC,
  Jaguar,
  Lamborghini,
  LandRover,
  Lexus,
  Mazda,
  MercedesBenz,
  Nissan,
  Porsche,
  Shelby,
  Subaru,
  Suzuki,
  Toyota,
  Troller,
  Volvo
];

export const MarcaCaminhao = [
  Ford,
  Honda,
  KIA,
  Hyundai,
  Pegeout,
  Renault,
  Volkswagen,
  IVECO,
  MercedesBenz
];

export const Dafra = "Dafra";
export const Ducati = "Ducati";
export const HarleyDavidson = "Harley Davidson";
export const Kasinski = "Kasinski";
export const Kawasaki = "Kawasaki";
export const Indian = "Indian";
export const Sundown = "Sundown";
export const Triumph = "Triumph";
export const Vespa = "Vespa";
export const Yamaha = "Yamaha";

export const MarcaMoto = [
  BMW,
  Dafra,
  Ducati,
  HarleyDavidson,
  Honda,
  Kasinski,
  Kawasaki,
  Suzuki,
  Yamaha,
  "--------",
  Indian,
  Sundown,
  Triumph,
  Vespa
];

export const MarcaVeiculo = {
  "": [],
  automóvel: MarcaCarro,
  caminhão: MarcaCaminhao,
  motocicleta: MarcaMoto
};

export const Recente = "Recente";
export const NaoRecente = "Não Recente";
export const AspectoDano = [Recente, NaoRecente];

export const Sim = "Sim";
export const Nao = "Não";
export const NaoDanos = "Não, em função dos danos";
export const isPreservado = [Sim, Nao];
export const isFuncionando = [Sim, Nao, NaoDanos];
export const Atuando = "atuando a contento";
export const NaoAtuando = "não atuando a contento";
export const NaoFoiPossivel = "não foi possível verificar";
export const isAtuando = [Atuando, NaoAtuando, NaoFoiPossivel];

export const FuncionandoNormalmente = "funcionando normalmente";
export const FuncionandoParcialmente = "funcionando parcialmente";
export const NaoFoiPossivelEletrica = "não foi possível verificar";
export const isParteEletrica = [
  FuncionandoNormalmente,
  FuncionandoParcialmente,
  NaoFoiPossivelEletrica
];

export const BomEstado = "em bom estado de conservação";
export const EmDesacordo = "em desacordo com a legislação vigente";
export const EstadoConservacao = [BomEstado, EmDesacordo];

export const SemChaves = "ausência das chaves de ignição";
export const SemBateria = "ausência da bateria";
export const Fogo = "ação do fogo";
export const MotivoNaoFoiPossivel = {
  [NaoFoiPossivelEletrica]: [SemChaves, SemBateria, Fogo]
};

export const ForaApp = "fora de app";
export const DentroApp10 = "dentro de app largura inferior a 10 metros";
export const DentroApp1050 = "dentro de app largura entre 10 e 50 metros";
export const AreaProtecaoAmbiental = [ForaApp, DentroApp10, DentroApp1050];

export const EstagioRecuperacaoInicial = "inicial";
export const EstagioRecuperacaoMedio = "médio";
export const EstagioRecuperacao = [
  EstagioRecuperacaoInicial,
  EstagioRecuperacaoMedio
];

export const Destruicao = "destruição";
export const Supressao = "supressão de vegetação";
export const Desmatamento = "desmatamento";
export const Desrespeito = "desrespeito ao embargo administrativo imposto";
export const Impedimento = "impedimento da regeneração natural";
export const MedianteAmbiental = [
  Destruicao,
  Supressao,
  Desmatamento,
  Desrespeito,
  Impedimento
];

export const FlorestaAltaRestinga = "floresta alta de restinga";
export const FlorestaBaixaRestinga = "floresta baixa de restinga";
export const FlorestaTransicaoRestinga = "floresta de transicão de restinga";
export const FlorestaOmbrofilaDensa = "floresta ombrófila densa";
export const VegetacaoTipica = [
  FlorestaAltaRestinga,
  FlorestaBaixaRestinga,
  FlorestaTransicaoRestinga,
  FlorestaOmbrofilaDensa
];

export const Primaria = "primária";
export const Secundaria = "secundária";
export const Terciaria = "terciária";
export const OrdemAmbiental = [Primaria, Secundaria, Terciaria];

export const MediantePatrimonial = [
  "mediante patrimonial A",
  "mediante patrimonial B"
];
