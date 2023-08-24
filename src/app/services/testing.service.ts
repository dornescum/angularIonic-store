import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../utils/interface';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class TestingService {

  // url = 'http://localhost:3000/api/v1/ionic-app';
  url = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>(this.url).pipe(map((res: Product[]) => res));
  }

  getProductId(index: string) {
    return this.http.get<Product>(this.url).pipe(map((res: Product | any) => {
     return res.filter((x: any) => x.id === index);
    }));
  }
}
