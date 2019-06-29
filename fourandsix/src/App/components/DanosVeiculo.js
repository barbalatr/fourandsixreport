import React from "react";
import { ButtonStyle, AppHeader } from "../App.css";
import {
  TextInput,
  TextArea,
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
import { TipoVeiculo, AspectoDano, isFuncionando } from "../../Commons";

export default class Vistoria extends React.Component {
  render() {
    const {
      values,
      handleChange,
      nextView,
      prevView,
      handleCheck,
      handleRadio,
      handleCheckSistemaSeguranca,
      handleCheckPneu,
      addDano,
      removeDano,
      asdf,
      qwer
    } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark" className="AppHeader">
          <h1>Vistoria Veicular</h1>
        </Navbar>
        <h4 align="center">
          {values.marcaVeiculo + " " + values.modeloVeiculo}
        </h4>
        {values.danosVeiculo.map((dano, index) => {
          return (
            <Container>
              <Form>
                <h4>Danos {index + 1}</h4>
                <CheckBoxInput
                  label="Amolgamento"
                  value={dano.amolgamentoVeiculo}
                  checked={dano.amolgamentoVeiculo}
                  onChange={asdf(index, "amolgamentoVeiculo")}
                />
                <CheckBoxInput
                  label="Atritamento Metálico"
                  value={dano.atritamentoVeiculo}
                  checked={dano.atritamentoVeiculo}
                  onChange={asdf(index, "atritamentoVeiculo")}
                />
                <CheckBoxInput
                  label="Fratura"
                  value={dano.fraturaVeiculo}
                  checked={dano.fraturaVeiculo}
                  onChange={asdf(index, "fraturaVeiculo")}
                />
                {values.tipoVeiculo === "motocicleta" && (
                  <CheckBoxInput
                    label="Entortamento"
                    value={dano.entortamento}
                    checked={dano.entortamento}
                    onChange={asdf(index, "entortamento")}
                  />
                )}

                <br />

                <RadioInput
                  label="recente"
                  value="recente"
                  checked={dano.aspectoDano === "recente"}
                  onChange={qwer(index, "aspectoDano")}
                />
                <RadioInput
                  label="não recente"
                  value="não recente"
                  checked={dano.aspectoDano === "não recente"}
                  onChange={qwer(index, "aspectoDano")}
                />
                <br />
                <h4>Localização</h4>
                {values.tipoVeiculo === "automóvel" && (
                  <Container>
                    <RadioInput
                      label="dianteira"
                      value="dianteira"
                      checked={dano.localizacaoDanos === "dianteira"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="setor angular anterior direito"
                      value="setor angular anterior direito"
                      checked={
                        dano.localizacaoDanos ===
                        "setor angular anterior direito"
                      }
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="setor angular anterior esquerdo"
                      value="setor angular anterior esquerdo"
                      checked={
                        dano.localizacaoDanos ===
                        "setor angular anterior esquerdo"
                      }
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="setor angular posterior direito"
                      value="setor angular posterior direito"
                      checked={
                        dano.localizacaoDanos ===
                        "setor angular posterior direito"
                      }
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="setor angular posterior esquerdo"
                      value="setor angular posterior esquerdo"
                      checked={
                        dano.localizacaoDanos ===
                        "setor angular posterior esquerdo"
                      }
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="traseira"
                      value="traseira"
                      checked={dano.localizacaoDanos === "traseira"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="flanco esquerdo"
                      value="flanco esquerdo"
                      checked={dano.localizacaoDanos === "flanco esquerdo"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="flanco direito"
                      value="flanco direito"
                      checked={dano.localizacaoDanos === "flanco direito"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="teto"
                      value="teto"
                      checked={dano.localizacaoDanos === "teto"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                  </Container>
                )}

                {values.tipoVeiculo === "motocicleta" && (
                  <Container>
                    <RadioInput
                      label="dianteira"
                      value="dianteira"
                      checked={dano.localizacaoDanos === "dianteira"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="traseira"
                      value="traseira"
                      checked={dano.localizacaoDanos === "traseira"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="flanco esquerdo"
                      value="flanco esquerdo"
                      checked={dano.localizacaoDanos === "flanco esquerdo"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="flanco direito"
                      value="flanco direito"
                      checked={dano.localizacaoDanos === "flanco direito"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="guidão"
                      value="guidão"
                      checked={dano.localizacaoDanos === "guidão"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="tanque de combustível"
                      value="tanque de combustível"
                      checked={
                        dano.localizacaoDanos === "tanque de combustível"
                      }
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="escapamento"
                      value="escapamento"
                      checked={dano.localizacaoDanos === "escapamento"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                    <RadioInput
                      label="carenagem"
                      value="carenagem"
                      checked={dano.localizacaoDanos === "carenagem"}
                      onChange={qwer(index, "localizacaoDanos")}
                    />
                  </Container>
                )}

                <br />
                <h4>Orientação</h4>

                <p>Lateral</p>
                <RadioInput
                  label="esquerda para a direita"
                  value="esquerda para a direita"
                  checked={
                    dano.orientacaoDanosLateral === "esquerda para a direita"
                  }
                  onChange={qwer(index, "orientacaoDanosLateral")}
                />
                <RadioInput
                  label="direita para a esquerda"
                  value="direita para a esquerda"
                  checked={
                    dano.orientacaoDanosLateral === "direita para a esquerda"
                  }
                  onChange={qwer(index, "orientacaoDanosLateral")}
                />
                <br />
                <p>Longitudinal</p>
                <RadioInput
                  label="frente para trás"
                  value="frente para trás"
                  checked={
                    dano.orientacaoDanosLongitudinal === "frente para trás"
                  }
                  onChange={qwer(index, "orientacaoDanosLongitudinal")}
                />
                <RadioInput
                  label="trás para frente"
                  value="trás para frente"
                  checked={
                    dano.orientacaoDanosLongitudinal === "trás para frente"
                  }
                  onChange={qwer(index, "orientacaoDanosLongitudinal")}
                />

                <br />
              </Form>
            </Container>
          );
        })}

        <div className="ButtonStyle">
          <Button variant="outline-primary" onClick={removeDano}>
            Excluir Dano
          </Button>
          &nbsp;
          <Button variant="primary" onClick={addDano}>
            Adicionar Novo Dano
          </Button>
          <br />
          <br />
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
