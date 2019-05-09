import React from "react";
import { Form, Table } from "react-bootstrap";

export function TableInput({ values }) {
  let valuesArray = Object.entries(values);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {valuesArray.map(v => (
          <tr>
            <td>{v[0]}</td>
            <td>{render(v[1])}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
  function render(a) {
    if (a === true) {
      return "Sim";
    }
    if (a === false) {
      return;
    }
    return a;
  }
}

export function TextInput({ label, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" onChange={onChange} value={value} />
    </Form.Group>
  );
}

export function Select({ label, value, onChange, values }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" value={value} onChange={onChange}>
        <option />
        {values.map(v => (
          <option>{v}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export function DateInput({ label, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="date" onChange={onChange} value={value} />
    </Form.Group>
  );
}

export function TimeInput({ label, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="time" onChange={onChange} value={value} />
    </Form.Group>
  );
}

export function CheckBoxInput({ label, value, onChange }) {
  return (
    <Form.Check
      type="checkbox"
      label={label}
      onChange={onChange}
      value={value}
    />
  );
}
export function RadioInput({ label, value, onChange, checked }) {
  return (
    <Form.Check
      type="radio"
      label={label}
      onChange={onChange}
      checked={checked}
      value={value}
    />
  );
}
