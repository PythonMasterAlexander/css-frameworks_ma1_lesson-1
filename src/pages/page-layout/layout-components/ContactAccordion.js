import React from 'react';

import { ListGroup, Item } from 'react-bootstrap';

export default function ContactAccordion() {
  return(
    <React.Fragment>
      <ListGroup>
        <ListGroup.Item>Tel: 123 456 789</ListGroup.Item>
        <ListGroup.Item>Donec mi orci, sollicitudin in luctus</ListGroup.Item>
        <ListGroup.Item>Suspendisse quis efficitur lectus</ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
}
