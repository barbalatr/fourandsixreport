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
            <Select
              label="Tipo de Veículo"
              value={values.tipoVeiculo}
              onChange={handleChange("tipoVeiculo")}
              values={TipoVeiculo}
            />
            <TextInput
              label="Placa"
              value={values.placa}
              onChange={handleChange("placa")}
            />
            <TextInput
              label="Marca"
              value={values.marcaVeiculo}
              onChange={handleChange("marcaVeiculo")}
            />
            <TextInput
              label="Modelo"
              value={values.modeloVeiculo}
              onChange={handleChange("modeloVeiculo")}
            />
            <TextInput
              label="Cor"
              value={values.corVeiculo}
              onChange={handleChange("corVeiculo")}
            />

            <p>Pneus em bom estado de consevação</p>
            <CheckBoxInput
              label="Todos."
              value={values.isPneuOk}
              checked={values.isPneuOk}
              onChange={handleCheckPneu}
            />

            <br />

            <CheckBoxInput
              label="Dianteiro Direito"
              value={values.pneuDianteiroDireito}
              checked={values.pneuDianteiroDireito}
              onChange={handleCheck("pneuDianteiroDireito")}
            />
            <CheckBoxInput
              label="Dianteiro Esquerdo"
              value={values.pneuDianteiroEsquerdo}
              checked={values.pneuDianteiroEsquerdo}
              onChange={handleCheck("pneuDianteiroEsquerdo")}
            />
            <CheckBoxInput
              label="Traseiro Direito"
              value={values.pneuTraseiroDireito}
              checked={values.pneuTraseiroDireito}
              onChange={handleCheck("pneuTraseiroDireito")}
            />
            <CheckBoxInput
              label="Traseiro Esquerdo"
              value={values.pneuTraseiroEsquerdo}
              checked={values.pneuTraseiroEsquerdo}
              onChange={handleCheck("pneuTraseiroEsquerdo")}
            />

            <br />

            <p>Sistemas de Segurança funcionando</p>

            <CheckBoxInput
              label="Todos."
              value={values.isSistemaSeguranca}
              checked={values.isSistemaSeguranca}
              onChange={handleCheckSistemaSeguranca}
            />
            <br />

            <Select
              label="Freios"
              value={values.freios}
              onChange={handleChange("freios")}
              values={isFuncionando}
            />
            {values.freios === "Não" && (
              <TextInput
                label="Encarregado"
                value={values.encarregado}
                onChange={handleChange("encarregado")}
              />
            )}
            <Select
              label="Direção"
              value={values.direcao}
              onChange={handleChange("direcao")}
              values={isFuncionando}
            />
            {values.direcao === "Não" && (
              <TextInput
                label="Encarregado"
                value={values.encarregado}
                onChange={handleChange("encarregado")}
              />
            )}
            <Select
              label="Parte Elétrica"
              value={values.parteEletrica}
              onChange={handleChange("parteEletrica")}
              values={isFuncionando}
            />
            {values.parteEletrica === "Não" && (
              <TextInput
                label="Encarregado"
                value={values.encarregado}
                onChange={handleChange("encarregado")}
              />
            )}
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
