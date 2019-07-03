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
                {(values.tipoVeiculo === "automóvel" ||
                  values.tipoVeiculo === "caminhão") && (
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

                    <br />

                    {dano.localizacaoDanos !== "teto" && (
                      <h4>Envolvendo principalmente...</h4>
                    )}

                    {(dano.localizacaoDanos === "dianteira" ||
                      dano.localizacaoDanos ===
                        "setor angular anterior esquerdo" ||
                      dano.localizacaoDanos ===
                        "setor angular anterior direito") && (
                      <Container>
                        <CheckBoxInput
                          label="farol esquerdo"
                          value={dano.farolEsquerdo}
                          checked={dano.farolEsquerdo}
                          onChange={asdf(index, "farolEsquerdo")}
                        />
                        <CheckBoxInput
                          label="farol direito"
                          value={dano.farolDireito}
                          checked={dano.farolDireito}
                          onChange={asdf(index, "farolDireito")}
                        />
                        <CheckBoxInput
                          label="capô"
                          value={dano.capo}
                          checked={dano.capo}
                          onChange={asdf(index, "capo")}
                        />
                        <CheckBoxInput
                          label="para-choque"
                          value={dano.paraChoques}
                          checked={dano.paraChoques}
                          onChange={asdf(index, "paraChoques")}
                        />
                      </Container>
                    )}
                    {(dano.localizacaoDanos === "traseira" ||
                      dano.localizacaoDanos ===
                        "setor angular posterior direito" ||
                      dano.localizacaoDanos ===
                        "setor angular posterior esquerdo") && (
                      <Container>
                        <CheckBoxInput
                          label="lanterna esquerda"
                          value={dano.lanternaEsquerda}
                          checked={dano.lanternaEsquerda}
                          onChange={asdf(index, "lanternaEsquerda")}
                        />
                        <CheckBoxInput
                          label="lanterna direita"
                          value={dano.lanternaDireita}
                          checked={dano.lanternaDireita}
                          onChange={asdf(index, "lanternaDireita")}
                        />
                        <CheckBoxInput
                          label="porta-malas"
                          value={dano.portalMalas}
                          checked={dano.portalMalas}
                          onChange={asdf(index, "portalMalas")}
                        />
                        <CheckBoxInput
                          label="para-choque"
                          value={dano.paraChoques}
                          checked={dano.paraChoques}
                          onChange={asdf(index, "paraChoques")}
                        />
                      </Container>
                    )}
                    {(dano.localizacaoDanos === "flanco esquerdo" ||
                      dano.localizacaoDanos === "flanco direito") && (
                      <Container>
                        <CheckBoxInput
                          label="porta dianteira"
                          value={dano.portaDianteira}
                          checked={dano.portaDianteira}
                          onChange={asdf(index, "portaDianteira")}
                        />
                        <CheckBoxInput
                          label="porta traseira"
                          value={dano.portaTraseira}
                          checked={dano.portaTraseira}
                          onChange={asdf(index, "portaTraseira")}
                        />
                        <CheckBoxInput
                          label="parlama dianteiro"
                          value={dano.paralamaDianteiro}
                          checked={dano.paralamaDianteiro}
                          onChange={asdf(index, "paralamaDianteiro")}
                        />
                        <CheckBoxInput
                          label="parlama traseiro"
                          value={dano.paralamaTraseiro}
                          checked={dano.paralamaTraseiro}
                          onChange={asdf(index, "paralamaTraseiro")}
                        />
                        <CheckBoxInput
                          label="espelho retrovisor"
                          value={dano.espelhoRetrovisor}
                          checked={dano.espelhoRetrovisor}
                          onChange={asdf(index, "espelhoRetrovisor")}
                        />
                      </Container>
                    )}
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

                    <br />

                    <h4>Envolvendo principalmente...</h4>

                    {dano.localizacaoDanos === "dianteira" && (
                      <Container>
                        <CheckBoxInput
                          label="farol"
                          value={dano.farol}
                          checked={dano.farol}
                          onChange={asdf(index, "farol")}
                        />

                        <CheckBoxInput
                          label="painel"
                          value={dano.painel}
                          checked={dano.painel}
                          onChange={asdf(index, "painel")}
                        />
                        <CheckBoxInput
                          label="guidão"
                          value={dano.guidao}
                          checked={dano.guidao}
                          onChange={asdf(index, "guidao")}
                        />
                        <CheckBoxInput
                          label="paralama"
                          value={dano.paralama}
                          checked={dano.paralama}
                          onChange={asdf(index, "paralama")}
                        />
                        <CheckBoxInput
                          label="bengala"
                          value={dano.bengala}
                          checked={dano.bengala}
                          onChange={asdf(index, "bengala")}
                        />
                        <CheckBoxInput
                          label="seta"
                          value={dano.seta}
                          checked={dano.seta}
                          onChange={asdf(index, "seta")}
                        />
                        <CheckBoxInput
                          label="tanque de combustível"
                          value={dano.tanqueCombunstivel}
                          checked={dano.tanqueCombunstivel}
                          onChange={asdf(index, "tanqueCombunstivel")}
                        />
                      </Container>
                    )}

                    {(dano.localizacaoDanos === "flanco esquerdo" ||
                      dano.localizacaoDanos === "flanco direito") && (
                      <Container>
                        <CheckBoxInput
                          label="espelho retrovisor"
                          value={dano.espelhoRetrovisor}
                          checked={dano.espelhoRetrovisor}
                          onChange={asdf(index, "espelhoRetrovisor")}
                        />
                        <CheckBoxInput
                          label="tanque de combustível"
                          value={dano.tanqueCombunstivel}
                          checked={dano.tanqueCombunstivel}
                          onChange={asdf(index, "tanqueCombunstivel")}
                        />
                        <CheckBoxInput
                          label="motor"
                          value={dano.motor}
                          checked={dano.motor}
                          onChange={asdf(index, "motor")}
                        />
                        <CheckBoxInput
                          label="radiador"
                          value={dano.radiador}
                          checked={dano.radiador}
                          onChange={asdf(index, "radiador")}
                        />
                        <CheckBoxInput
                          label="sistema de transmissão"
                          value={dano.sistemaTransmissao}
                          checked={dano.sistemaTransmissao}
                          onChange={asdf(index, "sistemaTransmissao")}
                        />
                        <CheckBoxInput
                          label="carenagem"
                          value={dano.carenagem}
                          checked={dano.carenagem}
                          onChange={asdf(index, "carenagem")}
                        />
                        <CheckBoxInput
                          label="escapamento"
                          value={dano.escapamento}
                          checked={dano.escapamento}
                          onChange={asdf(index, "escapamento")}
                        />
                      </Container>
                    )}

                    {dano.localizacaoDanos === "traseira" && (
                      <Container>
                        <CheckBoxInput
                          label="seta"
                          value={dano.seta}
                          checked={dano.seta}
                          onChange={asdf(index, "seta")}
                        />
                        <CheckBoxInput
                          label="luz de freio"
                          value={dano.luzFreio}
                          checked={dano.luzFreio}
                          onChange={asdf(index, "luzFreio")}
                        />
                      </Container>
                    )}
                  </Container>
                )}

                <br />
                <h4>Orientação</h4>

                {dano.localizacaoDanos !== "teto" &&
                  (dano.localizacaoDanos !== "flanco esquerdo" &&
                    dano.localizacaoDanos !== "flanco direito") && (
                    <Container>
                      <p>Lateral</p>
                      <RadioInput
                        label="esquerda para a direita"
                        value="esquerda para a direita"
                        checked={
                          dano.orientacaoDanosLateral ===
                          "esquerda para a direita"
                        }
                        onChange={qwer(index, "orientacaoDanosLateral")}
                      />
                      <RadioInput
                        label="direita para a esquerda"
                        value="direita para a esquerda"
                        checked={
                          dano.orientacaoDanosLateral ===
                          "direita para a esquerda"
                        }
                        onChange={qwer(index, "orientacaoDanosLateral")}
                      />

                      <br />
                      <p>Longitudinal</p>
                      <RadioInput
                        label="frente para trás"
                        value="frente para trás"
                        checked={
                          dano.orientacaoDanosLongitudinal ===
                          "frente para trás"
                        }
                        onChange={qwer(index, "orientacaoDanosLongitudinal")}
                      />
                      <RadioInput
                        label="trás para frente"
                        value="trás para frente"
                        checked={
                          dano.orientacaoDanosLongitudinal ===
                          "trás para frente"
                        }
                        onChange={qwer(index, "orientacaoDanosLongitudinal")}
                      />
                      <br />
                    </Container>
                  )}
                {dano.localizacaoDanos !== "teto" &&
                  (dano.localizacaoDanos === "flanco esquerdo" ||
                    dano.localizacaoDanos === "flanco direito") && (
                    <Container>
                      <p>Longitudinal</p>
                      <RadioInput
                        label="frente para trás"
                        value="frente para trás"
                        checked={
                          dano.orientacaoDanosLongitudinal ===
                          "frente para trás"
                        }
                        onChange={qwer(index, "orientacaoDanosLongitudinal")}
                      />
                      <RadioInput
                        label="trás para frente"
                        value="trás para frente"
                        checked={
                          dano.orientacaoDanosLongitudinal ===
                          "trás para frente"
                        }
                        onChange={qwer(index, "orientacaoDanosLongitudinal")}
                      />
                      <br />
                    </Container>
                  )}
                {dano.localizacaoDanos === "teto" && (
                  <Container>
                    <p>Vertical</p>
                    <RadioInput
                      label="de cima para baixo"
                      value="de cima para baixo"
                      checked={
                        dano.orientacaoDanosVertical === "de cima para baixo"
                      }
                      onChange={qwer(index, "orientacaoDanosVertical")}
                    />
                    <RadioInput
                      label="de baixo para cima"
                      value="de baixo para cima"
                      checked={
                        dano.orientacaoDanosVertical === "de baixo para cima"
                      }
                      onChange={qwer(index, "orientacaoDanosVertical")}
                    />
                  </Container>
                )}
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
