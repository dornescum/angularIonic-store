import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Store} from '@ngrx/store';
import {addProduct} from 'src/app/cart-store/cart.actions';
import {Product} from 'src/app/shared/Product';
import {ToastController} from '@ionic/angular';
import {ProductService} from '../../services/products.service';

@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id;
  product: any = [];

  // eslint-disable-next-line max-len
  constructor(private route: ActivatedRoute, private router: Router, private newService: NewServiceService, private store: Store, private toastController: ToastController,
              private newApi: ProductService) {
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation?.extras.state as { product: any };
    // if (state && state.product) {
    //   // Now you have access to the entire product object
    //   console.log('state ', state.product);
    //   this.product = state;
    // }
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log('this id ', this.id);
    // console.log('this route ', this.route);
    // good
    // this.product = this.newApi.getProductId(this.id).subscribe(
    //   (data: Product) => {
    //     // console.log('product ', data[0]);
    //     this.product = data[0];
    //   },
    //   (error) => {
    //     console.error('Error fetching laptops: ', error);
    //   }
    // );

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { product: any };
    if (state && state.product) {
      // Now you have access to the entire product object
      console.log('state ', state.product);
      this.product = state.product;
    } else {
      console.log('empty ');
    }
  }

  ionViewDidEnter() {
    console.log('View fully entered');
    console.log('ion ', this.product);
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
