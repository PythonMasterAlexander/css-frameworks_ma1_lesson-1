import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import ContactFormComponent from './layout-components/ContactFormComponent';
import ContactAccordion from './layout-components/ContactAccordion';

export default function ContactPageLayout() {
  return(
    <React.Fragment>
      <main>
        <Container>
          <Row>
            <Col>
              <ContactFormComponent />
            </Col>
            <Col>
              <ContactAccordion />
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}
