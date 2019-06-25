import React from "react";

import Requisicao from "./Requisicao";
import Local from "./Local";
import Confirmar from "./Confirmar";
import Sucesso from "./Sucesso";
import Vistoria from "./Vistoria";
import DanosVeiculo1 from "./DanosVeiculo1";
import Homicidio from "./Homicidio";

const initialState = {
  view: "Requisicao",
  requisicao: "",
  laudo: "",
  boletim: "",
  natureza: "Vistoria Veicular",
  isPreservado: false,
  encarregado: "",
  reEncarregado: "",
  prefixoViatura: "",
  delegacia: "",
  delegado: "",
  endereco: "",
  enderecoNumero: "",
  enderecoCidade: "",
  isLocalIC: false,
  diaAtendimento: "",
  horaChegada: "",
  dataLiberacao: "",
  horaLiberacao: "",
  fotografo: "",
  tipoVeiculo: "",
  placa: "",
  marcaVeiculo: "",
  modeloVeiculo: "",
  corVeiculo: "",
  danosVeiculoAutomovel: [],
  isPneuOk: "",
  pneuDianteiroDireito: "",
  pneuDianteiroEsquerdo: "",
  pneuTraseiroDireito: "",
  pneuTraseiroEsquerdo: "",
  isSistemaSeguranca: false,
  freios: "",
  direcao: "",
  parteEletrica: "",
  motivoFreio: "",
  motivoDirecao: "",
  motivoParteEletrica: ""
};

export default class ExamForm extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  // Return previous view
  back = () => {
    const { view, natureza } = this.state;
    if (view === "Local") {
      return "Requisicao";
    }
    if (view === "Vistoria Veicular") {
      return "Local";
    }
    if (view === "DanosVeiculo1") {
      return "Vistoria Veicular";
    }
    if (view === "Homicídio") {
      return "Local";
    }
    if (view === "Confirmar" && natureza === "") {
      return "Local";
    }
    if (view === "Confirmar" && natureza === "Vistoria Veicular") {
      return "Vistoria Veicular";
    }
    if (view === "Confirmar" && natureza === "Homicídio") {
      return "Homicídio";
    }
  };
  // Back to previous view
  prevView = () => {
    this.setState({
      view: this.back()
    });
  };
  // Return next view
  next = () => {
    const { view, natureza } = this.state;
    if (view === "Requisicao") {
      return "Local";
    }
    if (view === "Local" && natureza === "") {
      return "Confirmar";
    }
    if (view === "Local" && natureza === "Vistoria Veicular") {
      return "Vistoria Veicular";
    }
    if (view === "Local" && natureza === "Homicídio") {
      return "Homicídio";
    }
    if (view === "Vistoria Veicular") {
      return "DanosVeiculo1";
    }
    if (view === "DanosVeiculo1") {
      return "Confirmar";
    }
    if (view === "Homicídio") {
      return "Confirmar";
    }
    if (view === "Sucesso") {
      return "Requisicao";
    }
  };

  // Proceed to next view
  nextView = () => {
    this.setState({
      view: this.next()
    });
  };

  setStateSistemaSeguranca = () => {
    this.setState(state => {
      state.isSistemaSeguranca
        ? this.setState({
            freios: "Sim",
            direcao: "Sim",
            parteEletrica: "Sim"
          })
        : this.setState({
            freios: "",
            direcao: "",
            parteEletrica: ""
          });
    });
  };

  // Handle change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log("state has been changed");
  };
  handleCheck = input => event => {
    this.setState({ [input]: event.target.checked });
  };
  handleCheckEndereco = event => {
    let newState = event.target.checked
      ? {
          isLocalIC: true,
          endereco: "Alameda das Corvinas",
          enderecoNumero: 60,
          enderecoCidade: "São Sebastião - SP"
        }
      : {
          isLocalIC: false,
          endereco: "",
          enderecoNumero: "",
          enderecoCidade: ""
        };
    this.setState(newState);
  };
  handleCheckPneu = event => {
    let newState = event.target.checked
      ? {
          isPneuOk: true,
          pneuDianteiroDireito: "Sim",
          pneuDianteiroEsquerdo: "Sim",
          pneuTraseiroDireito: "Sim",
          pneuTraseiroEsquerdo: "Sim"
        }
      : {
          isPneuOk: false,
          pneuDianteiroDireito: "",
          pneuDianteiroEsquerdo: "",
          pneuTraseiroDireito: "",
          pneuTraseiroEsquerdo: ""
        };

    this.setState(newState);
  };
  handleCheckSistemaSeguranca = event => {
    let newState = event.target.checked
      ? {
          isSistemaSeguranca: true,
          freios: "atuando a contento",
          direcao: "atuando a contento",
          parteEletrica: "funcionando normalmente"
        }
      : {
          isSistemaSeguranca: false,
          freios: "",
          direcao: "",
          parteEletrica: ""
        };

    this.setState(newState);
  };

  handleRadio = input => event => {
    this.setState({ [input]: event.target.value });
  };

  addDano = () => {
    const danosVeiculoAutomovel = this.state.danosVeiculoAutomovel;
    danosVeiculoAutomovel.push({
      amolgamentoVeiculo: false,
      fraturaVeiculo: false,
      atritamentoVeiculo: false,
      aspectoDano: "",
      esquerdaParaDireita: false,
      direitaParaEsquerda: false,
      frenteParaTras: false,
      trasParafrente: false,
      dianteiraVeiculo: false,
      traseiraVeiculo: false,
      flancoEsquerdo: false,
      flancoDireito: false,
      teto: false
    });
    this.setState({ danosVeiculoAutomovel });
  };

  removeDano = () => {
    const danosVeiculoAutomovel = this.state.danosVeiculoAutomovel;
    danosVeiculoAutomovel.pop();
    this.setState({ danosVeiculoAutomovel });
  };

  asdf = (index, atributo) => () => {
    const danosVeiculoAutomovel = this.state.danosVeiculoAutomovel;
    danosVeiculoAutomovel[index][atributo] = !danosVeiculoAutomovel[index][
      atributo
    ];
    this.setState({ danosVeiculoAutomovel });
  };
  submit = () => {
    console.log("submit");
    fetch("/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        this.setState({ view: "Sucesso" });
      })
      .then(() => this.setState(initialState))
      .catch(error => {
        console.log("Erro", error);
        // TODO: Show error to the user
      });
  };

  render() {
    const { view } = this.state;
    const {
      requisicao,
      laudo,
      boletim,
      natureza,
      isPreservado,
      encarregado,
      reEncarregado,
      prefixoViatura,
      delegacia,
      delegado,
      endereco,
      enderecoCidade,
      isLocalIC,
      enderecoNumero,
      dataAtendimento,
      horaChegada,
      dataLiberacao,
      horaLiberacao,
      fotografo,
      tipoVeiculo,
      placa,
      marcaVeiculo,
      modeloVeiculo,
      corVeiculo,
      danosVeiculoAutomovel,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica,
      motivoFreio,
      motivoDirecao,
      motivoParteEletrica
    } = this.state;
    const values = {
      requisicao,
      laudo,
      boletim,
      natureza,
      isPreservado,
      encarregado,
      reEncarregado,
      prefixoViatura,
      delegacia,
      delegado,
      endereco,
      enderecoCidade,
      isLocalIC,
      enderecoNumero,
      dataAtendimento,
      horaChegada,
      dataLiberacao,
      horaLiberacao,
      fotografo,
      tipoVeiculo,
      placa,
      marcaVeiculo,
      modeloVeiculo,
      corVeiculo,
      danosVeiculoAutomovel,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica,
      motivoFreio,
      motivoDirecao,
      motivoParteEletrica
    };

    // Conditionally renders views
    if (view === "Requisicao") {
      return (
        <Requisicao
          nextView={this.nextView}
          handleChange={this.handleChange}
          values={values}
        />
      );
    }

    if (view === "Local") {
      return (
        <Local
          nextView={this.nextView}
          prevView={this.prevView}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleCheckEndereco={this.handleCheckEndereco}
          values={values}
        />
      );
    }
    if (view === "Vistoria Veicular") {
      return (
        <Vistoria
          nextView={this.nextView}
          prevView={this.prevView}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleRadio={this.handleRadio}
          handleCheckSistemaSeguranca={this.handleCheckSistemaSeguranca}
          handleCheckPneu={this.handleCheckPneu}
          values={values}
        />
      );
    }
    if (view === "DanosVeiculo1") {
      return (
        <DanosVeiculo1
          nextView={this.nextView}
          prevView={this.prevView}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleRadio={this.handleRadio}
          handleCheckSistemaSeguranca={this.handleCheckSistemaSeguranca}
          handleCheckPneu={this.handleCheckPneu}
          values={values}
          addDano={this.addDano}
          removeDano={this.removeDano}
          asdf={this.asdf}
        />
      );
    }

    if (view === "Homicídio") {
      return (
        <Homicidio
          nextView={this.nextView}
          prevView={this.prevView}
          handleChange={this.handleChange}
          values={values}
        />
      );
    }

    if (view === "Confirmar") {
      return (
        <Confirmar
          submit={this.submit}
          prevView={this.prevView}
          values={values}
        />
      );
    }
    if (view === "Sucesso") {
      return <Sucesso nextView={this.nextView} />;
    }
  }
}

/*

amolgamentoVeiculo: false,
fraturaVeiculo: false,
atritamentoVeiculo: false,
aspectoDano: "",
esquerdaParaDireita: false,
direitaParaEsquerda: false,
frenteParaTras: false,
trasParafrente: false,
dianteiraVeiculo: false,
traseiraVeiculo: false,
flancoEsquerdo: false,
flancoDireito: false,
teto: false

*/
