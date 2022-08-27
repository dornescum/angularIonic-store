import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {TestingService} from 'src/app/services/testing.service';
import {LocalService} from 'src/app/services/local.service';
import {LocalProduct} from 'src/app/shared/LocalProduct';
import {Product} from 'src/app/shared/Product';
import {addProduct} from 'src/app/cart-store/cart.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-items', templateUrl: './items.component.html', styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  id = '';
  // product: Subscription = [];
  // testing = '';
  data: Product | any = [{
    id: '',
    title: '',
    description: '',
    price: '',
    image: '',
    ['main_img']: '',
    link: '',
    rating: '',
    category: '',
    tag: '',
    specs:'',
   ['battery_size']:'',
    adaptor:'',
    brand: ''
  }];

  // eslint-disable-next-line max-len
  constructor(private apiPhones: ApiService,
              private route: ActivatedRoute,
              private testing: TestingService,
              private localPhones: LocalService,
              private store: Store
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.product = this.apiPhones.getInfo();
    // this.product = this.apiPhones.getProduct().subscribe((item) => {
    //   const data = item.filter((product: any) => product.id === this.id);
    //   console.log(data);
    //   return data;
    // });
    this.localPhones.getPhones().subscribe((item) => {
      this.data = item.filter((product: any) => product.id === this.id);

    });

    console.log(this.data);
  }

  buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  };

}
// this.product = this.apiPhones.getProduct().subscribe(item => console.log(item.filter((p: any) => p.id ===this.id)));

//  this.product = this.apiPhones.getProduct().subscribe((item) => {
//    const data = item.filter((product: any) => product.id === this.id);
//    console.log(data);
//    return data;
//  });
