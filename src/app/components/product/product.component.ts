import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Store} from '@ngrx/store';
import {addProduct} from 'src/app/cart-store/cart.actions';
import {Product} from 'src/app/shared/Product';
import {ToastController} from '@ionic/angular';
import {TestingService} from '../../services/testing.service';

@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id;
  product: any = [];

  // eslint-disable-next-line max-len
  constructor(private route: ActivatedRoute, private newService: NewServiceService, private store: Store, private toastController: ToastController,
              private newApi: TestingService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = this.newApi.getProductId(this.id).subscribe(
      (data: Product) => {
        this.product = data[0];
      },
      (error) => {
        console.error('Error fetching laptops: ', error);
      }
    );
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
