import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  isLoading = false;
  isLogin = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const name = form.value.name;
    const nameCard = form.value.cardName;
    const email = form.value.email;
    const card = form.value.card;
    const expires = form.value.expires;
    const cvv = form.value.cvv;
    const password = form.value.password;
    console.log(
      'Name : ',
      name,
      'Email : ',
      email,
      'Card : ',
      card,
      'Password : ',
      password,
      'Card Name : ',
      nameCard,
      'Cvv : ',
      cvv,
      'Expires : ',
      expires
    );

    if (name && password) {
      console.log('sent');
      this.isLoading = false;

      form.reset();
    } else {
      // Send a request to signup servers
      console.log('error');
      this.isLoading = true;
    }
  }
}
