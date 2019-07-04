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
  UsoImovel,
  NivelImovel,
  AlinhamentoImovel,
  MaterialConstrucao,
  Pavimentos,
  VizinhancaImovel,
  PassagemImovel,
  PrecedidoImovel
} from "../../Commons";

export default class FurtoQualificado extends React.Component {
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
          <h1>Furto Qualificado</h1>
        </Navbar>

        <Container>
          <h4 align="center">Do Imóvel</h4>

          <Form>
            <Select
              label="Tipo de Uso"
              value={values.usoImovel}
              onChange={handleChange("usoImovel")}
              values={UsoImovel}
            />
            <Select
              label="Material Construção"
              value={values.materialConstrucao}
              onChange={handleChange("materialConstrucao")}
              values={MaterialConstrucao}
            />
            <Select
              label="Pavimentos"
              value={values.pavimentos}
              onChange={handleChange("pavimentos")}
              values={Pavimentos}
            />
            {values.pavimentos === "mais de um pavimento" && (
              <TextInput
                label="Número de Pavimentos"
                value={values.numeroPavimentos}
                onChange={handleChange("numeroPavimentos")}
              />
            )}
            <Select
              label="Vizinhança"
              value={values.vizinhancaImovel}
              onChange={handleChange("vizinhancaImovel")}
              values={VizinhancaImovel}
            />
            <Select
              label="Nível"
              value={values.nivelImovel}
              onChange={handleChange("nivelImovel")}
              values={NivelImovel}
            />
            <Select
              label="Alinhamento"
              value={values.alinhamentoImovel}
              onChange={handleChange("alinhamentoImovel")}
              values={AlinhamentoImovel}
            />

            <Select
              label="Corredores Externos"
              value={values.passagemImovel}
              onChange={handleChange("passagemImovel")}
              values={PassagemImovel}
            />
            <Select
              label="Precedido"
              value={values.precedidoImovel}
              onChange={handleChange("precedidoImovel")}
              values={PrecedidoImovel}
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
