import React from "react";
import { ButtonStyle, AppHeader } from "../App.css";
import {
  TextInput,
  Select,
  DateInput,
  TimeInput,
  CheckBoxInput,
  RadioInput
} from "./BasicComponents";
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Form,
  Row,
  Col,
  Group
} from "react-bootstrap";
import {
  TipoVeiculo,
  MarcaVeiculo,
  Automovel,
  Motocicleta,
  AspectoDano,
  isAtuando,
  isParteEletrica,
  MotivoNaoFoiPossivel,
  NaoFoiPossivelEletrica,
  EstadoConservacao,
  AreaProtecaoAmbiental,
  MedianteAmbiental,
  VegetacaoTipica,
  OrdemAmbiental,
  EstagioRecuperacao
} from "../../Commons";

export default class CrimeAmbientalIndireto extends React.Component {
  render() {
    const {
      values,
      handleChange,
      nextView,
      prevView,
      handleCheck,
      handleRadio,
      handleCheckSistemaSeguranca,
      handleCheckPneu
    } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark" className="AppHeader">
          <h1>Crime Ambiental (Indireto)</h1>
        </Navbar>

        <Container>
          <Form>
            <TextInput
              label="BO PAmb"
              value={values.BOPamb}
              onChange={handleChange("BOPamb")}
            />
            <DateInput
              label="Data do BO PAmb"
              value={values.dataBOPamb}
              onChange={handleChange("dataBOPamb")}
            />
            <TextInput
              label="Tamanho da Área (ha)"
              value={values.tamanhoArea}
              onChange={handleChange("tamanhoArea")}
            />
            <Select
              label="APP"
              value={values.areaProtecaoAmbiental}
              onChange={handleChange("areaProtecaoAmbiental")}
              values={AreaProtecaoAmbiental}
            />
            <Select
              label="Mediante"
              value={values.medianteAmbiental}
              onChange={handleChange("medianteAmbiental")}
              values={MedianteAmbiental}
            />

            <Select
              label="Vegetação Típica"
              value={values.vegetacaoTipica}
              onChange={handleChange("vegetacaoTipica")}
              values={VegetacaoTipica}
            />

            <Select
              label="Ordem"
              value={values.ordemAmbiental}
              onChange={handleChange("ordemAmbiental")}
              values={OrdemAmbiental}
            />

            <Select
              label="Estágio de Recuperação"
              value={values.estagioRecuperacao}
              onChange={handleChange("estagioRecuperacao")}
              values={EstagioRecuperacao}
            />
          </Form>
        </Container>
        <br />

        <div className="ButtonStyle">
          <Button variant="outline-primary" onClick={prevView}>
            Voltar
          </Button>
          &nbsp;
          <Button variant="primary" onClick={nextView}>
            Continuar
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
