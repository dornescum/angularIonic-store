import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  title = '';
  id = '';
  products: any = [];
  product =[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    // this.id = this.apiService.getProduct().subscribe(item=>item.title);
    this.products = this.apiService.getProduct().subscribe(item =>{
      console.log(item);
      return item;
    });
    console.log(this.products);
    // this.product = this.products.filter(item => {
    //   // console.log(item.id === this.id);
    //   return item;
    // });
    console.log(this.product);
  }

}
