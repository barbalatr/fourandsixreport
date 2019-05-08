import React from "react";
import { TextInput, Select, DateInput, TimeInput } from "./BasicComponents";
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
import { TipoVeiculo, TipoDanoVeiculo } from "../../Commons";

export default class Vistoria extends React.Component {
  render() {
    const { values, handleChange, nextView, prevView } = this.props;
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
