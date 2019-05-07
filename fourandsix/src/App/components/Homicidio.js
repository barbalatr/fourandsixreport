import React from "react";
import { TextInput, Select, DateInput, TimeInput } from "./BasicComponents";
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Form
} from "react-bootstrap";
import { Fotografos, Natureza } from "../../Commons";

export default class Homicidio extends React.Component {
  render() {
    const { values, handleChange, nextView, prevView } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Homicídio</h1>
        </Navbar>

        <Container>
          <Form>
            <DateInput
              label="Data do Atendimento"
              value={values.dataAtendimento}
              onChange={handleChange("dataAtendimento")}
            />
            <TimeInput
              label="Hora de Chegada"
              value={values.horaChegada}
              onChange={handleChange("horaChegada")}
            />

            <TextInput
              label="Endereço"
              value={values.endereco}
              onChange={handleChange("endereco")}
            />

            <Select
              label="Fotógrafo"
              value={values.fotografo}
              onChange={handleChange("fotografo")}
              values={Fotografos}
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
