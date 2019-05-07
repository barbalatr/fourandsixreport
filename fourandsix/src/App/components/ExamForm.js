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
      boletim: "",
      natureza: "",
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
      localPlaca: "",
      marcaVeiculo: "",
      modeloVeiculo: "",
      corVeiculo: ""
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
      boletim,
      natureza,
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
      localPlaca,
      marcaVeiculo,
      modeloVeiculo,
      corVeiculo
    } = this.state;
    const values = {
      boletim,
      natureza,
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
      localPlaca,
      marcaVeiculo,
      modeloVeiculo,
      corVeiculo
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
