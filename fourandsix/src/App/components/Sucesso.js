import React from "react";
import { Button } from "react-bootstrap";

export default class Sucesso extends React.Component {
  render() {
    const { nextView } = this.props;
    return (
      <React.Fragment>
        <h1>Suuuuucesso</h1>

        <Button onClick={nextView}>Início</Button>
      </React.Fragment>
    );
  }
}
