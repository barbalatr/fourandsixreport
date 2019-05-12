import React from "react";
import Requisicao from "./Requisicao";
import Local from "./Local";
import Confirmar from "./Confirmar";
import Sucesso from "./Sucesso";
import Vistoria from "./Vistoria";
import Homicidio from "./Homicidio";

export default class ExamForm extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "Requisicao",
      requisicao: "",
      laudo: "",
      boletim: "",
      natureza: "Vistoria",
      isPreservado: "",
      encarregado: "",
      reEncarregado: "",
      prefixoViatura: "",
      delegacia: "",
      delegado: "",
      endereco: "",
      enderecoNumero: "",
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
      esquerdaParaDireita: "",
      direitaParaEsquerda: "",
      frenteParaTras: "",
      trasParafrente: "",
      dianteiraVeiculo: false,
      traseiraVeiculo: false,
      flancoEsquerdo: false,
      flancoDireito: false,
      teto: false
    };
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
  // Handle change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log("state has been changed");
  };
  handleCheck = input => event => {
    this.setState({ [input]: event.target.checked });
    console.log("state has been changed");
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
      teto
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
      teto
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
