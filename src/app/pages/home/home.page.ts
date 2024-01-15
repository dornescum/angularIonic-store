import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/shared/Product';
import {ProductService} from '../../services/products.service';
import {Router} from '@angular/router';
import {statusMessages} from '../../utils/statusMessages';
import {ngDebug} from "@angular/cli/src/utilities/environment-options";

@Component({
  selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  favItems: Product[] = [];
  allProducts: Product[] =[];
  taxPrice= Math.random();
  errorMessage = '';

  // eslint-disable-next-line max-len
  defaultImg = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';

  constructor( private productService: ProductService, private router: Router) {
    console.warn('This is a demo for recruiters ');
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        console.log('received products from express/mysql/docker ',data);
        this.allProducts = data;
      },
      (error) => {
        console.error('Error fetching data : ', error);
        this.errorMessage = statusMessages.errorFetchingData;
      }
    );
  }

  navigateToProduct(item: Product) {
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }
}
