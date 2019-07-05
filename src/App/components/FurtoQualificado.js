import React from "react";
import { ButtonStyle, AppHeader } from "../App.css";
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
import {
  UsoImovel,
  NivelImovel,
  AlinhamentoImovel,
  MaterialConstrucao,
  Pavimentos,
  VizinhancaImovel,
  PassagemImovel,
  PrecedidoImovel,
  VedacaoTerreno,
  VedacaoFrontalTerreno,
  InterrompidoPor,
  AcessoTerreno,
  EscaladaVedacao,
  ObjetoVedacao,
  MedianteAcessoTerreno,
  isApartamento
} from "../../Commons";

export default class FurtoQualificado extends React.Component {
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
        <Navbar bg="light" variant="dark" className="AppHeader">
          <h1>Furto Qualificado</h1>
        </Navbar>

        <Container>
          <h4 align="center">Do Imóvel</h4>

          <Form>
            <TextInput
              label="Nome"
              value={values.nomeAcompanhante}
              onChange={handleChange("nomeAcompanhante")}
            />
            <TextInput
              label="RG"
              value={values.RGAcompanhante}
              onChange={handleChange("RGAcompanhante")}
            />
            <Select
              label="Tipo de Uso"
              value={values.usoImovel}
              onChange={handleChange("usoImovel")}
              values={UsoImovel}
            />
            <Select
              label="Material Construção"
              value={values.materialConstrucao}
              onChange={handleChange("materialConstrucao")}
              values={MaterialConstrucao}
            />
            <Select
              label="Pavimentos"
              value={values.pavimentos}
              onChange={handleChange("pavimentos")}
              values={Pavimentos}
            />
            {values.pavimentos === "mais de um pavimento" && (
              <Container>
                <TextInput
                  label="Número de Pavimentos"
                  value={values.numeroPavimentos}
                  onChange={handleChange("numeroPavimentos")}
                />
                <Select
                  label="É apartamento?"
                  value={values.isApartamento}
                  onChange={handleChange("isApartamento")}
                  values={isApartamento}
                />
                {values.isApartamento === "Sim" && (
                  <Container>
                    <TextInput
                      label="Número do Apartamento"
                      value={values.numeroApartamento}
                      onChange={handleChange("numeroApartamento")}
                    />
                    <TextInput
                      label="Pavimento de interesse"
                      value={values.pavimentoInteresse}
                      onChange={handleChange("pavimentoInteresse")}
                    />
                  </Container>
                )}
              </Container>
            )}
            <Select
              label="Vizinhança"
              value={values.vizinhancaImovel}
              onChange={handleChange("vizinhancaImovel")}
              values={VizinhancaImovel}
            />
            <Select
              label="Nível"
              value={values.nivelImovel}
              onChange={handleChange("nivelImovel")}
              values={NivelImovel}
            />
            <Select
              label="Alinhamento"
              value={values.alinhamentoImovel}
              onChange={handleChange("alinhamentoImovel")}
              values={AlinhamentoImovel}
            />
            {values.isApartamento !== "Sim" && (
              <Container>
                <Select
                  label="Corredores Externos"
                  value={values.passagemImovel}
                  onChange={handleChange("passagemImovel")}
                  values={PassagemImovel}
                />
                <Select
                  label="Precedido"
                  value={values.precedidoImovel}
                  onChange={handleChange("precedidoImovel")}
                  values={PrecedidoImovel}
                />
              </Container>
            )}

            <Select
              label="Vedação Terreno"
              value={values.vedacaoTerreno}
              onChange={handleChange("vedacaoTerreno")}
              values={VedacaoTerreno}
            />
            <Select
              label="Vedação Frontal Terreno"
              value={values.vedacaoFrontalTerreno}
              onChange={handleChange("vedacaoFrontalTerreno")}
              values={VedacaoFrontalTerreno}
            />
            <Select
              label="Vedação Frontal Interrompida por..."
              value={values.interrompidoPor}
              onChange={handleChange("interrompidoPor")}
              values={InterrompidoPor}
            />
            <Select
              label="Acesso ao Terreno"
              value={values.acessoTerreno}
              onChange={handleChange("acessoTerreno")}
              values={AcessoTerreno}
            />
            {values.acessoTerreno === "escalada" && (
              <Container>
                <Select
                  label="Escalada Vedação"
                  value={values.escaladaVedacao}
                  onChange={handleChange("escaladaVedacao")}
                  values={EscaladaVedacao}
                />
                <TextInput
                  label="Altura Escalada"
                  value={values.alturaEscalada}
                  onChange={handleChange("alturaEscalada")}
                />
              </Container>
            )}
            {values.acessoTerreno === "rompimento de obstáculo" && (
              <Container>
                <Select
                  label="Objeto Vedação"
                  value={values.objetoVedacao}
                  onChange={handleChange("objetoVedacao")}
                  values={ObjetoVedacao}
                />
                <Select
                  label="Acesso ao terreno mediante..."
                  value={values.medianteAcessoTerreno}
                  onChange={handleChange("medianteAcessoTerreno")}
                  values={MedianteAcessoTerreno}
                />
              </Container>
            )}
            <TextInput
              label="Acesso ao interior mediante..."
              value={values.medianteAcessoImovel}
              onChange={handleChange("medianteAcessoImovel")}
            />
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
