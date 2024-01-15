import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {ProductService} from '../../services/products.service';
import {Product} from '../../utils/interface';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.page.html',
  styleUrls: ['./laptops.page.scss'],
})
export class LaptopsPage implements OnInit {
  laptops: Product[] = [];
  eventUrl: string;
  taxPrice= Math.random();
  private routerSubscription: Subscription;

  constructor(  private productService: ProductService, private router: Router,) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        // console.log('Current URL:', event.url)
        this.eventUrl = event.url;
        console.log(this.eventUrl);
        const urlSegments = event.url.split('/');
        console.log(urlSegments);
        const categoryName = urlSegments[1]; // Adjust the index based on your URL structure
        console.log(categoryName);
        // this.productService.getCategoryProducts(this.eventUrl).subscribe(
        this.productService.getCategoryProducts('/laptops').subscribe(
          (data: Product[]) => {
            // this.phones = data.filter((item: Product) => item.tag === 'phones');
            this.laptops = data;
          },
          (error) => {
            console.error('Error fetching laptops: ', error);
          }
        );
      }
    });

    // this.newApi.getAllProducts().subscribe(
    //   (laptopsData: Product[]) => {
    //     this.laptops = laptopsData.filter((item: Product) => item.tag === 'laptops');
    //   },
    //   (error) => {
    //     console.error('Error fetching laptops: ', error);
    //   }
    // );
  }

  navigateToProduct(item: Product) {
    console.log('item navigate to product ', item);
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }

}
