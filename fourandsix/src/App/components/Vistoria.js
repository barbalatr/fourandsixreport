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
import {
  TipoVeiculo,
  MarcaVeiculo,
  Automovel,
  Motocicleta,
  AspectoDano,
  isAtuando,
  isParteEletrica,
  MotivoNaoFoiPossivel,
  NaoFoiPossivelEletrica,
  EstadoConservacao
} from "../../Commons";

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
      qwer
    } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark" className="AppHeader">
          <h1>Vistoria Veicular</h1>
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
              value={values.placa.toUpperCase()}
              onChange={handleChange("placa")}
            />
            <Select
              label="Marca"
              value={values.marcaVeiculo}
              onChange={handleChange("marcaVeiculo")}
              values={MarcaVeiculo[values.tipoVeiculo]}
            />
            <TextInput
              label="Modelo"
              value={values.modeloVeiculo}
              onChange={handleChange("modeloVeiculo")}
            />
            <TextInput
              label="Cor"
              value={values.corVeiculo.toLowerCase()}
              onChange={handleChange("corVeiculo")}
            />

            <br />

            <h3>Estado de Conservação dos Pneus</h3>
            <CheckBoxInput
              label="Todos em bom estado"
              value={values.isPneuOk}
              checked={values.isPneuOk}
              onChange={handleCheckPneu}
            />
            <br />
            {values.tipoVeiculo === "automóvel" && (
              <Container>
                <Row>
                  <Col>
                    <Select
                      label="Dianteiro Esquerdo"
                      value={values.pneuDianteiroEsquerdo}
                      checked={values.pneuDianteiroEsquerdo}
                      onChange={handleChange("pneuDianteiroEsquerdo")}
                      values={EstadoConservacao}
                    />
                  </Col>
                  <Col>
                    <Select
                      label="Dianteiro Direito"
                      value={values.pneuDianteiroDireito}
                      checked={values.pneuDianteiroDireito}
                      onChange={handleChange("pneuDianteiroDireito")}
                      values={EstadoConservacao}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Select
                      label="Traseiro Esquerdo"
                      value={values.pneuTraseiroEsquerdo}
                      checked={values.pneuTraseiroEsquerdo}
                      onChange={handleChange("pneuTraseiroEsquerdo")}
                      values={EstadoConservacao}
                    />
                  </Col>

                  <Col>
                    <Select
                      label="Traseiro Direito"
                      value={values.pneuTraseiroDireito}
                      checked={values.pneuTraseiroDireito}
                      onChange={handleChange("pneuTraseiroDireito")}
                      values={EstadoConservacao}
                    />
                  </Col>
                </Row>

                <h4> Vidros </h4>
                <RadioInput
                  label="Não danificados"
                  value="Não danificados"
                  checked={values.isVidrosVeiculoOk === "Não danificados"}
                  onChange={handleRadio("isVidrosVeiculoOk")}
                />
                <RadioInput
                  label="Danificados"
                  value="Danificados"
                  checked={values.isVidrosVeiculoOk === "Danificados"}
                  onChange={handleRadio("isVidrosVeiculoOk")}
                />
                {values.isVidrosVeiculoOk === "Danificados" && (
                  <TextInput
                    placeholder="Dê mais detalhes..."
                    value={values.detalhesVidroAutomovel}
                    onChange={handleChange("detalhesVidroAutomovel")}
                  />
                )}
              </Container>
            )}

            {values.tipoVeiculo === "motocicleta" && (
              <Container>
                <Select
                  label="Dianteiro"
                  value={values.pneuDianteiro}
                  checked={values.pneuDianteiro}
                  onChange={handleChange("pneuDianteiro")}
                  values={EstadoConservacao}
                />
                <Select
                  label="Traseiro"
                  value={values.pneuTraseiro}
                  checked={values.pneuTraseiro}
                  onChange={handleChange("pneuTraseiro")}
                  values={EstadoConservacao}
                />
              </Container>
            )}

            <br />

            <h3>Sistemas de Segurança</h3>

            <CheckBoxInput
              label="Todos em bom estado"
              value={values.isSistemaSeguranca}
              checked={values.isSistemaSeguranca}
              onChange={handleCheckSistemaSeguranca}
            />
            <br />

            <Select
              label="Freios"
              placeholder="Username"
              value={values.freios}
              onChange={handleChange("freios")}
              values={isAtuando}
            />
            {values.freios === "não foi possível verificar" && (
              <TextInput
                placeholder="Descreva o motivo"
                value={values.motivoFreio}
                onChange={handleChange("motivoFreio")}
              />
            )}
            <Select
              label="Direção"
              value={values.direcao}
              onChange={handleChange("direcao")}
              values={isAtuando}
            />
            {values.direcao === "não foi possível verificar" && (
              <TextInput
                placeholder="Descreva o motivo"
                value={values.motivoDirecao}
                onChange={handleChange("motivoDirecao")}
              />
            )}
            <Select
              label="Parte Elétrica"
              value={values.parteEletrica}
              onChange={handleChange("parteEletrica")}
              values={isParteEletrica}
            />
            {values.parteEletrica === "funcionando parcialmente" && (
              <TextInput
                placeholder={"Descreva os detalhes"}
                value={values.motivoParteEletrica}
                onChange={handleChange("motivoParteEletrica")}
              />
            )}
            {values.parteEletrica === "não foi possível verificar" && (
              <Select
                placeholder={"Descreva o motivo"}
                value={values.motivoParteEletrica}
                values={MotivoNaoFoiPossivel[NaoFoiPossivelEletrica]}
                onChange={handleChange("motivoParteEletrica")}
              />
            )}
          </Form>
        </Container>
        <br />

        <div className="ButtonStyle">
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
