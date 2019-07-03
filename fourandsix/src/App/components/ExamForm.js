import React from "react";

import Requisicao from "./Requisicao";
import Local from "./Local";
import Confirmar from "./Confirmar";
import Sucesso from "./Sucesso";
import Vistoria from "./Vistoria";
import DanosVeiculo from "./DanosVeiculo";
import Homicidio from "./Homicidio";
import Municipios from "../../Commons";

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
  danosVeiculo: [
    {
      amolgamentoVeiculo: false,
      fraturaVeiculo: false,
      atritamentoVeiculo: false,
      entortamento: false,
      aspectoDano: "",
      localizacaoDanos: "",
      partesDanos: "",
      farolEsquerdo: "",
      farolDireito: "",
      lanternaEsquerda: "",
      lanternaDireita: "",
      portaDianteira: "",
      portaTraseira: "",
      paralamaDianteiro: "",
      paralamaTraseiro: "",
      capo: "",
      portaMalas: "",
      paraChoques: "",
      espelhoRetrovisor: "",
      farol: "",
      painel: "",
      guidao: "",
      bengala: "",
      paralama: "",
      motor: "",
      radiador: "",
      sistemaTransmissao: "",
      tanqueCombustivel: "",
      escapamento: "",
      seta: "",
      luzFreio: "",
      carenagem: "",
      orientacaoDanosLateral: "",
      orientacaoDanosLongitudinal: "",
      orientacaoDanosVertical: ""
    }
  ],
  isVidrosVeiculoOk: "",
  detalhesVidroAutomovel: "",
  isPneuOk: "",
  pneuDianteiroDireito: "",
  pneuDianteiroEsquerdo: "",
  pneuTraseiroDireito: "",
  pneuTraseiroEsquerdo: "",
  pneuDianteiro: "",
  pneuTraseiro: "",
  isSistemaSeguranca: false,
  freios: "",
  direcao: "",
  parteEletrica: "",
  motivoFreio: "",
  motivoDirecao: "",
  motivoParteEletrica: "",
  BOPamb: ""
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
    if (view === "DanosVeiculo") {
      return "Vistoria Veicular";
    }
    if (view === "Homicídio") {
      return "Local";
    }
    if (view === "Confirmar" && natureza === "") {
      return "Local";
    }
    if (view === "DanosVeiculo" && natureza === "Vistoria Veicular") {
      return "Vistoria Veicular";
    }
    if (view === "Confirmar" && natureza === "Vistoria Veicular") {
      return "DanosVeiculo";
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
      return "DanosVeiculo";
    }
    if (view === "DanosVeiculo") {
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
          enderecoCidade: "São Sebastião"
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
          pneuDianteiroDireito: "em bom estado de conservação",
          pneuDianteiroEsquerdo: "em bom estado de conservação",
          pneuTraseiroDireito: "em bom estado de conservação",
          pneuTraseiroEsquerdo: "em bom estado de conservação",
          pneuDianteiro: "em bom estado de conservação",
          pneuTraseiro: "em bom estado de conservação"
        }
      : {
          isPneuOk: false,
          pneuDianteiroDireito: "",
          pneuDianteiroEsquerdo: "",
          pneuTraseiroDireito: "",
          pneuTraseiroEsquerdo: "",
          pneuDianteiro: "",
          pneuTraseiro: ""
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
    const danosVeiculo = this.state.danosVeiculo;
    danosVeiculo.push({
      amolgamentoVeiculo: false,
      fraturaVeiculo: false,
      atritamentoVeiculo: false,
      entortamento: false,
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
      guidao: false,
      tanqueCombustivel: false,
      escapamento: false,
      carenagem: false
    });
    this.setState({ danosVeiculo });
  };

  removeDano = () => {
    const danosVeiculo = this.state.danosVeiculo;
    danosVeiculo.pop();
    this.setState({ danosVeiculo });
  };

  asdf = (index, atributo) => () => {
    const danosVeiculo = this.state.danosVeiculo;
    danosVeiculo[index][atributo] = !danosVeiculo[index][atributo];
    this.setState({ danosVeiculo });
  };

  qwer = (index, atributo) => event => {
    const danosVeiculo = this.state.danosVeiculo;
    danosVeiculo[index][atributo] = event.target.value;
    this.setState({ danosVeiculo });
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
      danosVeiculo,
      isVidrosVeiculoOk,
      detalhesVidroAutomovel,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      pneuDianteiro,
      pneuTraseiro,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica,
      motivoFreio,
      motivoDirecao,
      motivoParteEletrica,
      BOPamb
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
      danosVeiculo,
      isVidrosVeiculoOk,
      detalhesVidroAutomovel,
      isPneuOk,
      pneuDianteiroDireito,
      pneuDianteiroEsquerdo,
      pneuTraseiroDireito,
      pneuTraseiroEsquerdo,
      pneuDianteiro,
      pneuTraseiro,
      isSistemaSeguranca,
      freios,
      direcao,
      parteEletrica,
      motivoFreio,
      motivoDirecao,
      motivoParteEletrica,
      BOPamb
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
    if (view === "DanosVeiculo") {
      return (
        <DanosVeiculo
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
          qwer={this.qwer}
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
