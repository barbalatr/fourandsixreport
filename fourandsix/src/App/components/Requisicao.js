import React from "react";
import { ButtonStyle, AppHeader } from "../App.css";
import { TextInput, Select } from "./BasicComponents";
import { Navbar, Container, Button, Form } from "react-bootstrap";
import { Natureza, Delegacia, Delegado } from "../../Commons";

export default class Requisicao extends React.Component {
  render() {
    const { values, handleChange, nextView } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark" className="AppHeader">
          <h1>Requisição</h1>
        </Navbar>

        <Container>
          <Form>
            <TextInput
              label="Requisição - REP"
              value={values.requisicao}
              onChange={handleChange("requisicao")}
            />
            <TextInput
              label="Laudo - RE"
              value={values.laudo}
              onChange={handleChange("laudo")}
            />
            <TextInput
              label="R.D.O."
              value={values.boletim}
              onChange={handleChange("boletim")}
            />
            <Select
              label="Natureza"
              value={values.natureza}
              onChange={handleChange("natureza")}
              values={Natureza}
            />
            <TextInput
              label="Objetivo"
              value={values.objetivo}
              onChange={handleChange("objetivo")}
            />
            <Select
              label="Delegacia"
              value={values.delegacia}
              onChange={handleChange("delegacia")}
              values={Delegacia}
            />
          </Form>
        </Container>

        <div className="ButtonStyle">
          <Button onClick={nextView}>Continuar</Button>
        </div>
      </React.Fragment>
    );
  }
}
