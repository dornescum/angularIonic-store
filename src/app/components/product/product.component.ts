import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Store} from '@ngrx/store';
import {addProduct} from 'src/app/cart-store/cart.actions';
import {Product} from 'src/app/shared/Product';

@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id = '';
  product: any = [];

  constructor(private route: ActivatedRoute, private newService: NewServiceService, private store: Store) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.newService.phones.find((x) => x.id === this.id);
    console.log(this.product);
  }

  buyProduct(product: Product) {
    // @ts-ignore
    this.store.dispatch(addProduct(product));
  }
}
