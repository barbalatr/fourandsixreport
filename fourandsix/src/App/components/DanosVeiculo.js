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
                  label="Recentes"
                  value="Recentes"
                  checked={dano.aspectoDano === "Recentes"}
                  onChange={qwer(index, "aspectoDano")}
                />
                <RadioInput
                  label="Não Recentes"
                  value="Não Recentes"
                  checked={dano.aspectoDano === "Não Recentes"}
                  onChange={qwer(index, "aspectoDano")}
                />
                <br />
                <h4>Localização</h4>
                {values.tipoVeiculo === "automóvel" && (
                  <Container>
                    <CheckBoxInput
                      label="Dianteira"
                      value={dano.dianteiraVeiculo}
                      checked={dano.dianteiraVeiculo}
                      onChange={asdf(index, "dianteiraVeiculo")}
                    />
                    <CheckBoxInput
                      label="Traseira"
                      value={dano.traseiraVeiculo}
                      checked={dano.traseiraVeiculo}
                      onChange={asdf(index, "traseiraVeiculo")}
                    />
                    <CheckBoxInput
                      label="Flanco Esquerdo"
                      value={dano.flancoEsquerdo}
                      checked={dano.flancoEsquerdo}
                      onChange={asdf(index, "flancoEsquerdo")}
                    />
                    <CheckBoxInput
                      label="Flanco Direito"
                      value={dano.flancoDireito}
                      checked={dano.flancoDireito}
                      onChange={asdf(index, "flancoDireito")}
                    />
                    <CheckBoxInput
                      label="Teto"
                      value={dano.teto}
                      checked={dano.teto}
                      onChange={asdf(index, "teto")}
                    />
                  </Container>
                )}

                {values.tipoVeiculo === "motocicleta" && (
                  <Container>
                    <CheckBoxInput
                      label="Dianteira"
                      value={dano.dianteiraVeiculo}
                      checked={dano.dianteiraVeiculo}
                      onChange={asdf(index, "dianteiraVeiculo")}
                    />
                    <CheckBoxInput
                      label="Traseira"
                      value={dano.traseiraVeiculo}
                      checked={dano.traseiraVeiculo}
                      onChange={asdf(index, "traseiraVeiculo")}
                    />
                    <CheckBoxInput
                      label="Flanco Esquerdo"
                      value={dano.flancoEsquerdo}
                      checked={dano.flancoEsquerdo}
                      onChange={asdf(index, "flancoEsquerdo")}
                    />
                    <CheckBoxInput
                      label="Flanco Direito"
                      value={dano.flancoDireito}
                      checked={dano.flancoDireito}
                      onChange={asdf(index, "flancoDireito")}
                    />
                    <CheckBoxInput
                      label="Guidão"
                      value={dano.guidao}
                      checked={dano.guidao}
                      onChange={asdf(index, "guidao")}
                    />
                    <CheckBoxInput
                      label="Tanque de Combustível"
                      value={dano.tanqueCombustivel}
                      checked={dano.tanqueCombustivel}
                      onChange={asdf(index, "tanqueCombustivel")}
                    />
                    <CheckBoxInput
                      label="Escapamento"
                      value={dano.escapamento}
                      checked={dano.escapamento}
                      onChange={asdf(index, "escapamento")}
                    />
                    <CheckBoxInput
                      label="Carenagem"
                      value={dano.carenagem}
                      checked={dano.carenagem}
                      onChange={asdf(index, "carenagem")}
                    />
                  </Container>
                )}

                <br />
                <h4>Orientação</h4>
                <CheckBoxInput
                  label="esquerda para a direita"
                  value={dano.esquerdaParaDireita}
                  checked={dano.esquerdaParaDireita}
                  onChange={asdf(index, "esquerdaParaDireita")}
                />
                <CheckBoxInput
                  label="direita para a esquerda"
                  value={dano.direitaParaEsquerda}
                  checked={dano.direitaParaEsquerda}
                  onChange={asdf(index, "direitaParaEsquerda")}
                />
                <CheckBoxInput
                  label="frente para trás"
                  value={dano.frenteParaTras}
                  checked={dano.frenteParaTras}
                  onChange={asdf(index, "frenteParaTras")}
                />
                <CheckBoxInput
                  label="trás para frente"
                  value={dano.trasParafrente}
                  checked={dano.trasParafrente}
                  onChange={asdf(index, "trasParafrente")}
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
