import React from "react";
import {
  TextInput,
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
      handleCheckPneu
    } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Vistoria</h1>
        </Navbar>

        <Container>
          <Form>
            <h3>Danos </h3>
            <CheckBoxInput
              label="Amolgamento"
              value={values.amolgamentoVeiculo}
              checked={values.amolgamentoVeiculo}
              onChange={handleCheck("amolgamentoVeiculo")}
            />
            <CheckBoxInput
              label="Atritamento Metálico"
              value={values.atritamentoVeiculo}
              checked={values.atritamentoVeiculo}
              onChange={handleCheck("atritamentoVeiculo")}
            />
            <CheckBoxInput
              label="Fratura"
              value={values.fraturaVeiculo}
              checked={values.fraturaVeiculo}
              onChange={handleCheck("fraturaVeiculo")}
            />
            <br />

            <RadioInput
              label="Recentes"
              value="Recentes"
              checked={values.aspectoDano === "Recentes"}
              onChange={handleRadio("aspectoDano")}
            />
            <RadioInput
              label="Não Recentes"
              value="Não Recentes"
              checked={values.aspectoDano === "Não Recentes"}
              onChange={handleRadio("aspectoDano")}
            />
            <br />
            <h3>Localização</h3>
            <CheckBoxInput
              label="Dianteira"
              value={values.dianteiraVeiculo}
              checked={values.dianteiraVeiculo}
              onChange={handleCheck("dianteiraVeiculo")}
            />
            <CheckBoxInput
              label="Traseira"
              value={values.traseiraVeiculo}
              checked={values.traseiraVeiculo}
              onChange={handleCheck("traseiraVeiculo")}
            />
            <CheckBoxInput
              label="Flanco Esquerdo"
              value={values.flancoEsquerdo}
              checked={values.flancoEsquerdo}
              onChange={handleCheck("flancoEsquerdo")}
            />
            <CheckBoxInput
              label="Flanco Direito"
              value={values.flancoDireito}
              checked={values.flancoDireito}
              onChange={handleCheck("flancoDireito")}
            />
            <CheckBoxInput
              label="Teto"
              value={values.teto}
              checked={values.teto}
              onChange={handleCheck("teto")}
            />
            <br />
            <h3>Orientação</h3>
            <CheckBoxInput
              label="esquerda para a direita"
              value={values.esquerdaParaDireita}
              checked={values.esquerdaParaDireita}
              onChange={handleCheck("esquerdaParaDireita")}
            />
            <CheckBoxInput
              label="direita para a esquerda"
              value={values.direitaParaEsquerda}
              checked={values.direitaParaEsquerda}
              onChange={handleCheck("direitaParaEsquerda")}
            />
            <CheckBoxInput
              label="frente para trás"
              value={values.frenteParaTras}
              checked={values.frenteParaTras}
              onChange={handleCheck("frenteParaTras")}
            />
            <CheckBoxInput
              label="trás para frente"
              value={values.trasParafrente}
              checked={values.trasParafrente}
              onChange={handleCheck("trasParafrente")}
            />

            <br />
          </Form>
        </Container>
        <br />

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
