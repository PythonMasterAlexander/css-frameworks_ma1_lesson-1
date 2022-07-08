import React from 'react';
import styled from 'styled-components';

import { Card, Button }from 'react-bootstrap';

export default function HomePageCardSection() {
  return(
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Heading One</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean volutpat efficitur eleifend. Etiam sit amet turpis dolor.
            Maecenas facilisis semper est sit amet facilisis. Aliquam turpis enim, 
            euismod in tincidunt non, dapibus quis dolor.
          </Card.Text>
          <Button variant="primary">View Moore</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
