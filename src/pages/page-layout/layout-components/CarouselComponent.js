import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-bootstrap';

import CarouselSliderOne from '../../../images/slider-1.jpg';
import CarouselSliderTwo from '../../../images/slider-2.jpg';
import CarouselSliderThree from '../../../images/slider-3.jpg';

export default function CarouselComponent() {
  return(
    <React.Fragment>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselSliderOne} alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselSliderTwo} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselSliderThree} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}
