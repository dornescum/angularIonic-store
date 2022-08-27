import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {clearCart} from 'src/app/cart-store/cart.actions';
import {Observable} from 'rxjs';
import {ProductGroup, selectCountProducts, selectGroupedCartEntries} from 'src/app/cart-store/cart.selectors';
import {addProduct, removeProduct} from 'src/app/cart-store/cart.actions';

@Component({
  selector: 'app-cart', templateUrl: './cart.page.html', styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartEntries$: Observable<ProductGroup[]>;
  countProduct$: Observable<number>;


  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    this.countProduct$ = store.select(selectCountProducts);
    console.log(this.countProduct$);
  }

  ngOnInit() {
  }

  clearEntries() {
    this.store.dispatch(clearCart());
  }

  addEntries(entry: any) {
    this.store.dispatch(addProduct(entry));
  }

  removeEntries(entry: any) {
    this.store.dispatch(removeProduct(entry));

  }
}
