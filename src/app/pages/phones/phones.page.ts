import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Product} from '../../utils/interface';
import {ProductService} from '../../services/products.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.page.html',
  styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: Product[]= [];
  eventUrl: string;
  taxPrice= Math.random();
  private routerSubscription: Subscription;


  constructor( private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Using Router to get the entire URL
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
        this.productService.getCategoryProducts('/phones').subscribe(
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
    console.log('rs ', this.routerSubscription);
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
    console.log('item navigate to product ', item);
    this.router.navigate(['/product', item.id], {
      state: { product: item }
    });
  }

  // ngOnDestroy() {
  //   console.log('unsubscribe ');
  //   if (this.routerSubscription) {
  //     this.routerSubscription.unsubscribe();
  //   }
  // }

  // handleButtonClicked(eventData: string, item: Product) {
  //   console.log('event data ', eventData); // 'Button clicked!'
  //   // Additional logic here
  //   this.router.navigate(['/product', item.id], {
  //     state: { product: item }
  //   });
  // }

}
