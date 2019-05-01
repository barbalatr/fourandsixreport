// @flow
const Ocorrencia = {
  // Local
  localImediato: null,
  // Local[]
  locais: [],
  // string
  timestampAcionado: '',
  // string
  timestampChegada: '',
  // string
  timestampPartida: '',
  // Delegado
  delegadoRequisitante: null,
  // (CrimeAmbiental | DanoPatrimonial)[]
  crimes: [],
};
const Local = {
  // TipoDeLogradouro
  tipoDeLogradouro: null,
  // string
  endereco: '',
  // string
  observacao: '',
  // string
  numero: '',
  // string
  bairro: '',
  // Municipio
  municipio: '',
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
  isolamento: null,
};
const CrimeAmbiental = {
  // Natureza
  natureza: null,
  // Qualificadora[]
  qualificadora: [],
  // Mediante
  mediante: [],
  // numero
  boAssociado: null,
  // string
  dataBoAssociado: '',
  // string
  tamanhoDaArea: '',
  // App
  app: null,
  // MedianteAmbiental[]
  mediante: [],
};
const DanoPatrimonial = {
  // Natureza
  natureza: null,
  // Mediante
  mediante: [],
};
const Avenida = 'Avenida';
const Rua = 'Rua';
const Rodovia = 'Rodovia';
const Estrada = 'Estrada';
const Praca = 'Praça';
const TipoDeLogradouro = [Avenida, Rua, Rodovia, Estrada, Praca];

const Ubatuba = 'Ubatuba - SP';
const Caraguatatuba = 'Caraguatatuba - SP';
const Ilhabela = 'Ilhabela - SP';
const SaoSebastiao = 'São Sebastião - SP';
const Municipios = [Ubatuba, Caraguatatuba, Ilhabela, SaoSebastiao];

const Residential = 'residencial';
const Comercial = 'comercial';
const TipoDeLocal = [Residential, Comercial];

const ComRecuo = 'com recuo';
const SemRecuo = 'sem recuo';
const AlinhamentoDeLocal = [ComRecuo, SemRecuo];

const DelegadoA = 'delegado a';
const DelegadoB = 'delegado B';
const Delegado = [DelegadoA, DelegadoB];

const ForaApp = 'fora de app';
const DentroApp10 = 'dentro de app largura inferior a 10 metros';
const DentroApp1050 = 'dentro de app largura entre 10 e 50 metros';
const App = [ForaApp, DentroApp10, DentroApp50];

const MedianteAmbiental = [
  'destruição de vegetação nativa típica',
];
const MediantePatrimonial = [
  'mediante patrimonial A',
  'mediante patrimonial B',
];
