import React from "react";
import App from "../App.css";
import { Button } from "react-bootstrap";

export default class Sucesso extends React.Component {
  render() {
    const { nextView } = this.props;
    return (
      <React.Fragment>
        <h1>Sucesso</h1>
        <p>Aperte o botão para voltar ao início</p>

        <Button onClick={nextView}>Início</Button>
      </React.Fragment>
    );
  }
}
