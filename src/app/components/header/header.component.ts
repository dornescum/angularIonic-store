import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectCountProducts, selectTotalPrice} from 'src/app/cart-store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  countProduct$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private  store: Store) {
    // this.countProduct$ = new Observable<number>();
    this.countProduct$ = store.select(selectCountProducts);
    // this.totalPrice$ = new Observable();
    this.totalPrice$ = store.select(selectTotalPrice);
    // console.log(this.totalPrice$);
  }

  ngOnInit() {}

}
