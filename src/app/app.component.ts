import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'paper-plane' },
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Cards', url: 'cards', icon: 'heart' },
    { title: 'Phones', url: 'phones', icon: 'archive' },
    { title: 'Tv', url: 'tv', icon: 'trash' },
    { title: 'Cart', url: 'cart', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
