import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`
  background-color: rgb(33, 37, 41);
  display: flex;
  flex-shrink: 0;
`;

const I = styled.i`
  color: hsla(0, 0%, 100%, 1);
`;

const HeadingThree = styled.h3`
  color: hsla(0, 0%, 55%, 1);
`;

const Span = styled.span`
  color: hsla(0, 0%, 55%, 1);
`;

export default function PageFooter() {
  return(
    <React.Fragment>
      <Footer>
        <Container>
          <Row>
            <Col>
              <I className="fa-brands fa-twitter"></I>
              <I className="fa-brands fa-vimeo-v"></I>
            </Col>
            <Col>
              <HeadingThree>Copyright 2020</HeadingThree>
            </Col>
            <Col>
              <Span>Terms</Span>
              <Span>Privacy Policy</Span>
            </Col>
          </Row>
        </Container>
      </Footer>
    </React.Fragment>
  );
}
