import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import BreadCrumbsComponent from './layout-components/BreadCrumbsComponent';
import ProductImageComponent from './layout-components/ProductImageComponent';
import ProductInformationComponent from './layout-components/ProductInformationComponent';

export default function ProductPageLayout() {
  return(
    <React.Fragment>
      <main>
        <Container>
          <BreadCrumbsComponent />
          <Row>
            <Col>
              <h1>Product One</h1>
            </Col>
            <Col>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Tag 1</Button>
                <Button variant="secondary">Tag 2</Button>
                <Button variant="secondary">Tag 3</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
        <ProductImageComponent />
        <ProductionInformationComponent />
      </main>
    </React.Fragment>
  );
}
