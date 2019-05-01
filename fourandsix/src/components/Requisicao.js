import React from "react";
import { TextInput, Select } from "./BasicComponents";
import { Navbar, Container, Button, Form } from "react-bootstrap";

export default class Requisicao extends React.Component {
  render() {
    const { values, handleChange, nextStep } = this.props;
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
              label="Delegacia"
              value={values.delegacia}
              onChange={handleChange("delegacia")}
              values={[
                "01 Caraguatatuba",
                "02 Caraguatatuba",
                "Ilhabela",
                "São Sebastião",
                "Del. Pol. Ubatuba"
              ]}
            />

            <TextInput
              label="Natureza"
              value={values.natureza}
              onChange={handleChange("natureza")}
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
              values={["Ana", "Fabio", "Mauro", "Paulo", "Silvia", "Ubirajara"]}
            />
          </Form>
        </Container>

        <Button onClick={nextStep}>Continuar</Button>
      </React.Fragment>
    );
  }
}
