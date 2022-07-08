import React from 'react';
import styled from  'styled-components';

import {  Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from './layout-components/CarouselComponent';

import HomePageCardSection from './layout-components/HomePageCardSection';

export default function HomePageLayout() {
  return(
    <React.Fragment>
      <main>
        <CarouselComponent />
        <Container>
          <h1>SERIOUSLY, BUY MORE THINGS</h1>
          <Row>
            <Col>
              <HomePageCardSection />
            </Col>
            <Col>
              <HomePageCardSection />
            </Col>
            <Col>
              <HomePageCardSection />
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}
