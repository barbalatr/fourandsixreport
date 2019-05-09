import React from "react";
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
import { TipoVeiculo, AspectoDano } from "../../Commons";

export default class Vistoria extends React.Component {
  render() {
    const {
      values,
      handleChange,
      nextView,
      prevView,
      handleCheck,
      handleRadio
    } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Vistoria</h1>
        </Navbar>

        <Container>
          <Form>
            <Select
              label="Tipo de Veículo"
              value={values.tipoVeiculo}
              onChange={handleChange("tipoVeiculo")}
              values={TipoVeiculo}
            />
            <TextInput
              label="Placa"
              value={values.placa}
              onChange={handleChange("placa")}
            />
            <TextInput
              label="Marca"
              value={values.marcaVeiculo}
              onChange={handleChange("marcaVeiculo")}
            />
            <TextInput
              label="Modelo"
              value={values.modeloVeiculo}
              onChange={handleChange("modeloVeiculo")}
            />
            <TextInput
              label="Cor"
              value={values.corVeiculo}
              onChange={handleChange("corVeiculo")}
            />
            <h3>Danos </h3>
            <CheckBoxInput
              label="Amolgamento"
              value={values.amolgamentoVeiculo}
              onChange={handleCheck("amolgamentoVeiculo")}
            />
            <CheckBoxInput
              label="Atritamento Metálico"
              value={values.atritamentoVeiculo}
              onChange={handleCheck("atritamentoVeiculo")}
            />
            <CheckBoxInput
              label="Fratura"
              value={values.fraturaVeiculo}
              onChange={handleCheck("fraturaVeiculo")}
            />

            <RadioInput
              label="Recentes"
              value="Recentes"
              checked={values.aspectoDano === "Recentes"}
              onChange={handleRadio("aspectoDano")}
            />
            <RadioInput
              label="Não Recentes"
              value="Não Recentes"
              checked={values.aspectoDano === "Não Recentes"}
              onChange={handleRadio("aspectoDano")}
            />
            <h3>Localização</h3>
            <CheckBoxInput
              label="Dianteira"
              value={values.dianteiraVeiculo}
              onChange={handleCheck("dianteiraVeiculo")}
            />
            <CheckBoxInput
              label="Traseira"
              value={values.traseiraVeiculo}
              onChange={handleCheck("traseiraVeiculo")}
            />
            <CheckBoxInput
              label="Flanco Esquerdo"
              value={values.flancoEsquerdo}
              onChange={handleCheck("flancoEsquerdo")}
            />
            <CheckBoxInput
              label="Flanco Direito"
              value={values.flancoDireito}
              onChange={handleCheck("flancoDireito")}
            />
          </Form>
        </Container>

        <ButtonToolbar>
          <Button variant="outline-primary" onClick={prevView}>
            Voltar
          </Button>
          &nbsp;
          <Button variant="primary" onClick={nextView}>
            Continuar
          </Button>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}
