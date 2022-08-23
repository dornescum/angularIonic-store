/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  phones = [
    {
      id: 'phone-1',
      title: 'phone-1',
      price: 399,
      img: '../../assets/img/1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-2',
      title: 'phone-2',
      price: 299,
      img: '../../assets/img/2.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-3',
      title: 'phone-3',
      price: 499,
      img: '../../assets/img/3.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-4',
      title: 'phone-4',
      price: 599,
      img: '../../assets/img/4.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-5',
      title: 'phone-5',
      price: 599,
      img: '../../assets/img/5.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
  ];
  constructor() {}
}
