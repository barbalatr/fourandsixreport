import React from "react";
import Requisicao from "./Requisicao";
import Local from "./Local";
import Confirmar from "./Confirmar";
import Sucesso from "./Sucesso";

export default class ExamForm extends React.Component {
  state = {
    step: 1,
    boletim: "",
    delegacia: "",
    natureza: "",
    endereco: "",
    enderecoNumero: "",
    dataAtendimento: "",
    horaChegada: "",
    dataLiberacao: "",
    horaLiberacao: "",
    fotografo: ""
  };
  // Back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Handle fields change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log("state has been changed");
  };

  render() {
    const { step } = this.state;
    const {
      boletim,
      delegacia,
      natureza,
      endereco,
      enderecoNumero,
      dataAtendimento,
      horaChegada,
      dataLiberacao,
      horaLiberacao,
      fotografo
    } = this.state;
    const values = {
      boletim,
      delegacia,
      natureza,
      endereco,
      enderecoNumero,
      dataAtendimento,
      horaChegada,
      dataLiberacao,
      horaLiberacao,
      fotografo
    };
    switch (step) {
      case 1:
        return (
          <Requisicao
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Local
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmar
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Sucesso />;
      default:
        // Só pro console parar de me retornar
        // que está faltando default
        console.log("Erro no Step");
    }
  }
}
