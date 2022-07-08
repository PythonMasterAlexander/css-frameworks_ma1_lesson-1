import React from 'react';

import { Card, Button } from 'react-bootstrap';

export default function CardProducts() {
  return(
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Text>
            Praesent pulvinar placerat felis vitae faucibus.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
