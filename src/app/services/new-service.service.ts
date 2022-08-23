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
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-2',
      title: 'phone-2',
      price: 299,
      img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-3',
      title: 'phone-3',
      price: 499,
      img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
    {
      id: 'phone-4',
      title: 'phone-4',
      price: 599,
      img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate voluptates accusantium, recusandae delectus odit laborum nostrum esse! Rerum minus expedita recusandae possimus voluptatibus eius excepturi error veritatis voluptatem cumque?',
    },
  ];
  constructor() {}
}
