import React from "react";
import { TextInput, Select, DateInput, TimeInput } from "./BasicComponents";
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Form
} from "react-bootstrap";
import { Fotografos, Natureza, isPreservado } from "../../Commons";

export default class Local extends React.Component {
  render() {
    const { values, handleChange, nextView, prevView } = this.props;
    return (
      <React.Fragment>
        <Navbar bg="light" variant="dark">
          <h1>Local</h1>
        </Navbar>

        <Container>
          <Form>
            <Select
              label="Fotógrafo"
              value={values.fotografo}
              onChange={handleChange("fotografo")}
              values={Fotografos}
            />
            <DateInput
              label="Data do Atendimento"
              value={values.dataAtendimento}
              onChange={handleChange("dataAtendimento")}
            />
            <TimeInput
              label="Hora de Chegada"
              value={values.horaChegada}
              onChange={handleChange("horaChegada")}
            />
            <TextInput
              label="Endereço"
              value={values.endereco}
              onChange={handleChange("endereco")}
            />

            <Select
              label="Preservado"
              value={values.isPreservado}
              onChange={handleChange("isPreservado")}
              values={isPreservado}
            />

            {values.isPreservado === "Sim" && (
              <div>
                <TextInput
                  label="Encarregado"
                  value={values.encarregado}
                  onChange={handleChange("encarregado")}
                />
                <TextInput
                  label="RE Encarregado"
                  value={values.reEncarregado}
                  onChange={handleChange("reEncarregado")}
                />
                <TextInput
                  label="Prefixo Viatura"
                  value={values.prefixoViatura}
                  onChange={handleChange("prefixoViatura")}
                />
              </div>
            )}
          </Form>
        </Container>

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

/*
<Select
  label="Preservado"
  value={values.isPreservado}
  onChange={handleChange("isPreservado")}
  values={isPreservado}
/>
<TextInput
  label="Encarregado"
  value={values.encarregado}
  onChange={handleChange("encarregado")}
/>
<TextInput
  label="RE Encarregado"
  value={values.reEncarregado}
  onChange={handleChange("reEncarregado")}
/>
<TextInput
  label="Prefixo Viatura"
  value={values.prefixoViatura}
  onChange={handleChange("prefixoViatura")}
/>
*/
