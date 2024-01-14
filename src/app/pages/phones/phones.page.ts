import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
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

  constructor( private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('router ', this.router);
    // console.log('route ', this.route);
    // console.log('route ', this.route.snapshot);
    // this.route.url.subscribe(segments => {
    //   console.log('URL segments:', segments);
    // });

    // Using Router to get the entire URL
    this.router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        // console.log('Current URL:', event.url)
        this.eventUrl = event.url;
        this.productService.getCategoryProducts(this.eventUrl).subscribe(
          (data: Product[]) => {
            // this.phones = data.filter((item: Product) => item.tag === 'phones');
            this.phones = data;
          },
          (error) => {
            console.error('Error fetching laptops: ', error);
          }
        );
      }
    });
    // this.productService.getAllProducts().subscribe(
    //   (data: Product[]) => {
    //     this.phones = data.filter((item: Product) => item.tag === 'phones');
    //   },
    //   (error) => {
    //     console.error('Error fetching laptops: ', error);
    //   }
    // );

  }

  navigateToProduct(item: Product) {
    console.log('item ', item);
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }

  handleButtonClicked(eventData: string, item: Product) {
    console.log('event data ', eventData); // 'Button clicked!'
    // Additional logic here
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }

}
