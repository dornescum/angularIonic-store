import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  allItems: any = [];
  target: HTMLIonNavElement;

  constructor() {
  }

  ngOnInit() {
    this.allItems = [{
      name: 'product 1',
      id: '1',
      img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      desc: 'some product'
    }, {
      name: 'product 2 ',
      id: '2',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      desc: 'other product'
    }];
  }

}
