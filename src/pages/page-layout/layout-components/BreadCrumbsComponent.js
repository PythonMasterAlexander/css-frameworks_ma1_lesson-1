import React from 'react';

import { Breadcrumb, Item } from 'react-bootstrap';

export default function BreadCrumbsComponent() {
  return(
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </React.Fragment>
  );
}
