import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../../utils/interface';
import {ProductService} from '../../services/products.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.page.html',
  styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: Product[]= [];
  eventUrl: string;
  taxPrice= Math.random();


  constructor( private productService: ProductService, private router: Router) { }

  ngOnInit() {
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.eventUrl = event.url;
        this.productService.getCategoryProducts('/phones').subscribe(
          (data: Product[]) => {
            this.phones = data;
          },
          (error) => {
            console.error('Error fetching laptops: ', error);
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
