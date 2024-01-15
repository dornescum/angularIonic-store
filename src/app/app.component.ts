import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Phones', url: 'phones', icon: 'heart' },
    { title: 'Laptops', url: 'laptops', icon: 'archive' },
    { title: 'Tv', url: 'tvs', icon: 'trash' },
    { title: 'Cart', url: 'cart', icon: 'warning' },
    { title: 'Login', url: 'login', icon: 'paper-plane' },
    { title: 'Register', url: 'register', icon: 'paper-plane' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
