import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import car from '../../img/faces/car.jpeg';
import car1 from '../../img/faces/car1.jpeg';
import car2 from '../../img/faces/car2.jpeg';
import car3 from '../../img/faces/car3.jpeg';

const items = [
  {
    src: '../../img/faces/car.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '../../img/faces/car1.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: '../../img/faces/car2.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: '../../img/faces/car3.jpeg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;