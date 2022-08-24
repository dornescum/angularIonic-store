import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {clearCart} from 'src/app/cart-store/cart.actions';
import {Observable} from 'rxjs';
import {ProductGroup, selectGroupedCartEntries} from 'src/app/cart-store/cart.selectors';
import {addProduct, removeProduct} from 'src/app/cart-store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartEntries$: Observable<ProductGroup[]>;
  value = 1;
  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  ngOnInit() {
  }
  clearEntries(){
    this.store.dispatch(clearCart());
  }
  addEntries(entry: any){
    this.store.dispatch(addProduct(entry.product));
    this.value++;
  }
  removeEntries(entry: any){
    this.store.dispatch(removeProduct(entry.product));
    this.value--;
  }
}
