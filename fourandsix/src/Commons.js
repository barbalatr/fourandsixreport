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
export const Vistoria = "Vistoria";
export const DanoPatrimonial = "Dano Patrimonial";
export const Furto = "Furto";
export const FurtoQualificado = "Furto Qualificado";
export const Natureza = [Homicidio, Vistoria];

// Delegacias do Litoral Norte
export const DelPolCaraguatatuba1 = "01 Caraguatatuba";
export const DelPolCaraguatatuba2 = "02 Caraguatatuba";
export const DelPolIlhabela = "Ilhabela";
export const DelPolSaoSebastiao = "São Sebastião";
export const DelPolUbatuba = "Del. Pol. Ubatuba";
export const Delegacia = [
  DelPolCaraguatatuba1,
  DelPolCaraguatatuba2,
  DelPolIlhabela,
  DelPolSaoSebastiao,
  DelPolUbatuba
];

// Delegados do Litoral Norte
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
export const Ana = "Ana Cristina Romano";
export const Fabio = "Fabio Romano";
export const Mauro = "Mauro";
export const Paulo = "Paulo";
export const Silvia = "Silvia Jeiger";
export const Ubirajara = "Ubirajara";
export const Fotografos = [Ana, Fabio, Mauro, Paulo, Silvia, Ubirajara];

export const Residential = "residencial";
export const Comercial = "comercial";
export const TipoDeLocal = [Residential, Comercial];

export const ComRecuo = "com recuo";
export const SemRecuo = "sem recuo";
export const AlinhamentoDeLocal = [ComRecuo, SemRecuo];

export const Automovel = "Automóvel";
export const Onibus = "Ônibus";
export const Motocicleta = "Motocicleta";
export const TipoVeiculo = [Automovel, Onibus, Motocicleta];

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
