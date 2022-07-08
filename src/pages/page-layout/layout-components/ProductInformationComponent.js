import React from 'react';

import { Container, Row, Col, ListGroup, Item } from 'react-bootstrap';

export default function ProductInformationComponent() {
  return(
    <React.Fragment>
      <Container>
        <Row>
          <h2>Sed tincidunt pharatra nulla</h2>
          <Col>
            <p>
              Phasellus quis nunc nec sapien scelerisque gravida id vel quam. Morbi eu volutpat lectus. 
              Donec ultrices ut nulla ut rutrum. Nunc commodo magna elementum erat cursus, eget vulputate 
              ante tincidunt.
            </p>
            <p>
              Duis in vehicula augue. Nullam eu faucibus leo, consectetur molestie velit. Quisque eget dapibus massa. 
            </p>
            <p>
              Morbi eu volutpat lectus. Donec ultrices ut nulla ut rutrum. Nunc commodo magna elementum erat cursus, 
              eget vulputate ante tincidunt. Duis in vehicula augue.
            </p>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
