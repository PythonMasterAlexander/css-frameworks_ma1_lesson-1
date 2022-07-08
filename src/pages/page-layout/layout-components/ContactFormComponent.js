import React from 'react';

import { Form, Button } from 'react-bootstrap';

export default function ContactFormComponent() {
  return(
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </React.Fragment>
  );
}
