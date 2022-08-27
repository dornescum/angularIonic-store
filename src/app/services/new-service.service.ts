/* eslint-disable max-len */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  phones = [{
    id: 1,
    title: 'phone-1',
    tag: 'phone',
    price: 399,
    img: '../../assets/img/1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 2,
    title: 'phone-2',
    tag: 'phone',
    price: 299,
    img: '../../assets/img/2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 3,
    title: 'phone-3',
    tag: 'phone',
    price: 499,
    img: '../../assets/img/3.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 4,
    title: 'phone-4',
    tag: 'phone',
    price: 599,
    img: '../../assets/img/4.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 5,
    title: 'phone-5',
    tag: 'phone',
    price: 599,
    img: '../../assets/img/5.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 6,
    title: 'tv-1',
    tag: 'tv',
    price: 599,
    img: '../../assets/img/tv-1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 7,
    title: 'tv-2',
    tag: 'tv',
    price: 899,
    img: '../../assets/img/tv-2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  },
    {
      id: 8,
      title: 'laptop-1',
      tag: 'laptop',
      price: 599,
      img: '../../assets/img/tv-1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    }, {
      id: 9,
      title: 'laptop-2',
      tag: 'laptop',
      price: 899,
      img: '../../assets/img/tv-2.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
  ];

  constructor() {
  }
}
