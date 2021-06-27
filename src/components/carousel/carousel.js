import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://res.cloudinary.com/bomayee/image/upload/v1627140195/car2_nufgky.jpg',
    key: '1',
    width: "10%",
    height: "50px",
  },
  {
    src: 'https://res.cloudinary.com/bomayee/image/upload/v1627140195/car3_hs3nfm.jpg',
    key: '2',
    width: "70%",
    height: "300px",
  },
  {
    src: 'https://res.cloudinary.com/bomayee/image/upload/v1627140195/car_cprdqe.jpg',
    key: '3',
    width: "70%",
    height: "300px",
  },
  {
    src: 'https://res.cloudinary.com/bomayee/image/upload/v1627140194/car1_yreai8.jpg',
    key: '4',
    width: "70%",
    height: "300px",
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;