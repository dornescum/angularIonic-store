import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {addProduct} from 'src/app/cart-store/cart.actions';
import {Product} from 'src/app/shared/Product';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id;
  product: any = [];

  // eslint-disable-next-line max-len
  constructor(private route: ActivatedRoute, private router: Router, private store: Store, private toastController: ToastController) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    const state: { product: any } = navigation?.extras.state as { product: any };
    if (state && state.product) {
      this.product = state.product;
    } else {
      console.log('empty ');
    }
  }

  async buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
    const toast = await this.toastController.create({
      message: 'Added to cart.',
      duration: 2000
    });
    await toast.present();
  }
}
