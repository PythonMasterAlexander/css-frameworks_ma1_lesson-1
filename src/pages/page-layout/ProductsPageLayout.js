import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import CardProducts from './layout-components/CardProducts';

export default function ProductsPageLayout() {
  return(
    <React.Fragment>
      <main>
        <Container>
          <h1>Products</h1>
          <Row>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
            <Col>
              <CardProducts  />
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}
