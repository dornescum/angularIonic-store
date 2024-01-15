import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import {Store} from '@ngrx/store';
import {clearCart} from 'src/app/cart-store/cart.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  isLoading = false;

  constructor(private router: Router, private store: Store) {
  }

  ngOnInit() {
  }

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

    if (name && password) {
      this.isLoading = false;
      this.clearEntries();
      form.reset();
    } else {
      console.log('error');
      this.isLoading = true;
    }
  }
  clearEntries() {
    this.store.dispatch(clearCart());
    this.router.navigate(['/home']);
  }
}
