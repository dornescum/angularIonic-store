import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../utils/interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>(`${this.url}/products`).pipe(map((res:  {data: Product[]}) => {
      return res.data;
    }));
  }

  getCategoryProducts(category: string) {
    return this.http.get<any>(`${this.url}/products/category${category}`).pipe(map((res:  {data: Product[]}) => {
      return res.data;
    }));
  }
}
