import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Phones', url: 'phones', icon:'mail' },
    { title: 'Laptops', url: 'laptops', icon: 'heart' },
    { title: 'Tv', url: 'tvs', icon: 'tv' },
    { title: 'Cart', url: 'cart', icon: 'warning' },
    { title: 'Login', url: 'login', icon: 'trash' },
    { title: 'Register', url: 'register', icon: 'archive' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
