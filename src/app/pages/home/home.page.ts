import {Component, OnInit} from '@angular/core';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Product} from 'src/app/shared/Product';
import {TestingService} from '../../services/testing.service';

@Component({
  selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  favItems: Product[] = [];
  allProducts: Product[] =[];
  taxPrice= Math.random();

  // eslint-disable-next-line max-len
  defaultImg = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';

  constructor(private newService: NewServiceService, private newApi: TestingService) {
  }

  // todo add individual route
  ngOnInit() {
    this.newApi.getAllProducts().subscribe(
      (data: any) => {
        console.log('data home page', data);
        this.allProducts = data.data;
        // this.favItems = data.filter((item: any) => item.favorite === 1);
      },
      (error) => {
        console.error('Error fetching laptops: ', error);
      }
    );
  }

}
