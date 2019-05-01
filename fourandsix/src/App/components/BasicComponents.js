import React from "react";
import { Form } from "react-bootstrap";

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
