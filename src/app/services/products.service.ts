import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../utils/interface';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // url = 'http://localhost:3000/api/v1/ionic-app';
  url = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    // console.log('url from service ',`${this.url}/products`);
    return this.http.get<any>(`${this.url}/products`).pipe(map((res:  {data: Product[]}) => {
      console.log(res.data);
      return res.data;
    }));
  }

  getProductId(index: string | number) {
    // console.log('url for one ', `${this.url}/products/${index}`);
    return this.http.get<Product>(`${this.url}/products/${index}`).pipe(map((res: Product | any) => {
      console.log('red one ', res.data[0]);
     return res.data[0];
    }));
  }

  getCategoryProducts(category: string) {
    // console.log('url from service ',`${this.url}/products`);
    return this.http.get<any>(`${this.url}/products/category${category}`).pipe(map((res:  {data: Product[]}) => {
      console.log(res.data);
      return res.data;
    }));
  }

  // getProductId(index: string) {
  //   return this.http.get<Product>(this.url).pipe(map((res: Product | any) => {
  //    return res.filter((x: any) => x.id === index);
  //   }));
  // }
}
