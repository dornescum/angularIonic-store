import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ProductService} from '../../services/products.service';
import {Product} from '../../utils/interface';

@Component({
  selector: 'app-tv', templateUrl: './tv.page.html', styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tvs: Product[] = [];
  eventUrl: string;
  taxPrice= Math.random();

  constructor( private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.eventUrl = event.url;
        this.productService.getCategoryProducts('/tvs').subscribe(
          (data: Product[]) => {
            this.tvs = data;
          },
          (error) => {
            console.error('Error fetching tvs: ', error);
          }
        );
      }
    });
  }

  navigateToProduct(item: Product) {
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }

}
