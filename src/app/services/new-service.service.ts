/* eslint-disable max-len */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  phones = [{
    id: 1,
    title: 'phone-1',
    tag: 'phones',
    favorite: true,
    price: 399,
    rating:3,
    img: '../../assets/img/1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 2,
    title: 'phone-2',
    tag: 'phones',
    favorite: true,
    price: 299,
    rating:5,
    img: '../../assets/img/2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 3,
    title: 'phone-3',
    tag: 'phones',
    favorite: true,
    price: 499,
    rating:4,
    img: '../../assets/img/3.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 4,
    title: 'phone-4',
    tag: 'phones',
    favorite: false,
    price: 599,
    rating:1,
    img: '../../assets/img/4.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 5,
    title: 'phone-5',
    tag: 'phones',
    favorite: false,
    price: 599,
    rating:2,
    img: '../../assets/img/5.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 6,
    title: 'tv-1',
    tag: 'tvs',
    favorite: false,
    price: 599,
    rating:5,
    img: '../../assets/img/tv-1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  }, {
    id: 7,
    title: 'tv-2',
    tag: 'tvs',
    favorite: true,
    price: 899,
    rating:2,
    img: '../../assets/img/tv-2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
  },
    {
      id: 8,
      title: 'laptop-1',
      tag: 'laptops',
      favorite: true,
      price: 599,
      rating:5,
      img: '../../assets/img/tv-1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    }, {
      id: 9,
      title: 'laptop-2',
      tag: 'laptops',
      favorite: false,
      price: 899,
      rating:5,
      img: '../../assets/img/tv-2.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
  ];

  constructor() {
  }
}
