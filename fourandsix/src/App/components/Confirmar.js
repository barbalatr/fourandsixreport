import React from "react";
import { TextInput, Select, TableInput } from "./BasicComponents";
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Form,
  Table
} from "react-bootstrap";

export default class Confirmar extends React.Component {
  render() {
    const { values, submit, prevView } = this.props;

    const xxx = Object.entries(values).flatMap(([a, b]) => {
      if (b instanceof Array)
        return b.flatMap((object, index) =>
          [[a + "-" + index, ""]].concat(Object.entries(object))
        );
      return [[a, b]];
    });

    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Resumo</h1>
        </Navbar>

        <Container>
          <TableInput values={xxx} />
        </Container>

        <ButtonToolbar>
          <Button variant="outline-primary" onClick={prevView}>
            Voltar
          </Button>
          &nbsp;
          <Button variant="primary" onClick={submit}>
            Finalizar
          </Button>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}
