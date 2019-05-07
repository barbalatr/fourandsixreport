import React from "react";
import { TextInput, Select } from "./BasicComponents";
import { Navbar, Container, Button, Form } from "react-bootstrap";
import { Natureza, Delegacia, Delegado } from "../../Commons";

export default class Requisicao extends React.Component {
  render() {
    const { values, handleChange, nextView } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Requisição</h1>
        </Navbar>

        <Container>
          <Form>
            <TextInput
              label="B.O."
              value={values.boletim}
              onChange={handleChange("boletim")}
            />
            <Select
              label="Natureza"
              value={values.natureza}
              onChange={handleChange("natureza")}
              values={Natureza}
            />
            <Select
              label="Delegacia"
              value={values.delegacia}
              onChange={handleChange("delegacia")}
              values={Delegacia}
            />
            <Select
              label="Delegado"
              value={values.delegado}
              onChange={handleChange("delegado")}
              values={Delegado[values.delegacia] || []}
            />
          </Form>
        </Container>

        <Button onClick={nextView}>Continuar</Button>
      </React.Fragment>
    );
  }
}
