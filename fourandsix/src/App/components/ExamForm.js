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
  natureza: "Vistoria",
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
  dataAtendimento: "",
  horaChegada: "",
  dataLiberacao: "",
  horaLiberacao: "",
  fotografo: "",
  tipoVeiculo: "",
  placa: "",
  marcaVeiculo: "",
  modeloVeiculo: "",
  corVeiculo: "",
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
  teto: false,
  isPneuOk: "",
  pneuDianteiroDireito: "",
  pneuDianteiroEsquerdo: "",
  pneuTraseiroDireito: "",
  pneuTraseiroEsquerdo: "",
  isSistemaSeguranca: false,
  freios: "",
  direcao: "",
  parteEletrica: ""
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
    if (view === "Vistoria") {
      return "Local";
    }
    if (view === "Homicídio") {
      return "Local";
    }
    if (view === "Confirmar" && natureza === "") {
      return "Local";
    }
    if (view === "Confirmar" && natureza === "Vistoria") {
      return "Vistoria";
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
    if (view === "Local" && natureza === "Vistoria") {
      return "Vistoria";
    }
    if (view === "Local" && natureza === "Homicídio") {
      return "Homicídio";
    }
    if (view === "Vistoria") {
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

  // Proceed to next view
  nextView = () => {
    this.setState({
      view: this.next()
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
          freios: "Sim",
          direcao: "Sim",
          parteEletrica: "Sim"
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
      amolgamentoVeiculo,
      fraturaVeiculo,
      atritamentoVeiculo,
      aspectoDano,
      esquerdaParaDireita,
      direitaParaEsquerda,
      frenteParaTras,
      trasParafrente,
      dianteiraVeiculo,
      traseiraVeiculo,
      flancoEsquerdo,
      flancoDireito,
      teto,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica
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
      amolgamentoVeiculo,
      fraturaVeiculo,
      atritamentoVeiculo,
      aspectoDano,
      esquerdaParaDireita,
      direitaParaEsquerda,
      frenteParaTras,
      trasParafrente,
      dianteiraVeiculo,
      traseiraVeiculo,
      flancoEsquerdo,
      flancoDireito,
      teto,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica
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
    if (view === "Vistoria") {
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
