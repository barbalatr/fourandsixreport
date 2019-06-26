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
  tipoDeLogradouro: null,
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
export const Vistoria = "Vistoria Veicular";
export const DanoPatrimonial = "Dano Patrimonial";
export const Furto = "Furto";
export const FurtoQualificado = "Furto Qualificado";
export const Natureza = [Vistoria];

// Delegacias do Litoral Norte
//TODO adicionar DDM em todos
export const DelPolCaraguatatuba1 = "01º DP de Caraguatatuba";
export const DelPolCaraguatatuba2 = "02º DP de Caraguatatuba";
export const DelPolCaraguatatuba = "Delegacia de Polícia de Caraguatatuba";
export const DelPolIlhabela = "Ilhabela";
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

/* Delegados do Litoral Norte
export const DelegadoA = "delegado A";
export const DelegadoB = "delegado B";
export const DelegadoC = "delegado C";
export const DelegadoD = "delegado D";
export const Delegado = {
  [DelPolCaraguatatuba1]: [DelegadoA, DelegadoB],
  [DelPolCaraguatatuba2]: [DelegadoC, DelegadoD],
  [DelPolIlhabela]: [DelegadoC, DelegadoD],
  [DelPolSaoSebastiao]: [DelegadoC, DelegadoD],
  [DelPolUbatuba]: [DelegadoC, DelegadoD]
};
*/

export const Avenida = "Avenida";
export const Rua = "Rua";
export const Rodovia = "Rodovia";
export const Estrada = "Estrada";
export const Praca = "Praça";
export const TipoDeLogradouro = [Avenida, Rua, Rodovia, Estrada, Praca];

export const Ubatuba = "Ubatuba - SP";
export const Caraguatatuba = "Caraguatatuba - SP";
export const Ilhabela = "Ilhabela - SP";
export const SaoSebastiao = "São Sebastião - SP";
export const Municipios = [Ubatuba, Caraguatatuba, Ilhabela, SaoSebastiao];

// Fotografos
export const Ana = "Ana Cristina Toledo";
export const Fabio = "Fabio Romano";
export const Gilberto = "Gilberto Bardacim";
export const Mauro = "Mauro";
export const Paulo = "Paulo Junior";
export const Silvia = "Silvia Jeiger";
export const Ubirajara = "Ubirajara";
export const Fotografos = [
  Ana,
  Fabio,
  Gilberto,
  Mauro,
  Paulo,
  Silvia,
  Ubirajara
];

export const Residential = "residencial";
export const Comercial = "comercial";
export const TipoDeLocal = [Residential, Comercial];

export const ComRecuo = "com recuo";
export const SemRecuo = "sem recuo";
export const AlinhamentoDeLocal = [ComRecuo, SemRecuo];

export const Automovel = "automóvel";
export const Caminhao = "caminhão";
export const Onibus = "ônibus";
export const Motocicleta = "motocicleta";
export const TipoVeiculo = [Automovel, Motocicleta];

export const AlfaRomeo = "Alfa Romeo";
export const AstonMartin = "Aston Martin";
export const Audi = "Audi";
export const BMW = "BMW";
export const Bugre = "Bugre";
export const Bugway = "Bugway";
export const Chery = "Chery";
export const Chevrolet = "Chevrolet";
export const Chrysler = "Chrysler";
export const Citroen = "Citroen";
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
  motocicleta: MarcaMoto
};

export const Fratura = "Fratura";
export const Amolgamento = "Amolgamento";
export const Atritamento = "Atritamento Metálico";
export const TipoDanoVeiculo = [Fratura, Amolgamento, Atritamento];

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

/*
export const ForaApp = "fora de app";
export const DentroApp10 = "dentro de app largura inferior a 10 metros";
export const DentroApp1050 = "dentro de app largura entre 10 e 50 metros";
export const AreaDeProtecaoAmbiental = [ForaApp, DentroApp10, DentroApp50];
*/

export const MedianteAmbiental = ["destruição de vegetação nativa típica"];
export const MediantePatrimonial = [
  "mediante patrimonial A",
  "mediante patrimonial B"
];
