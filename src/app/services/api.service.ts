import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/Product';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://electronis-api.herokuapp.com/api/phones';
  urlAll = 'https://electronis-api.herokuapp.com/api/all';

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Product>(this.url).pipe(
      map(
        (res: Product | any) =>
          // console.log(res);
          res
      )
    );
  }

  getAllProducts() {
    return this.http.get<any>(this.urlAll).pipe(map((res: any) => res));
  }
  // getProductId(index: string) {
  //   return this.http.get<Product>(this.url).pipe(
  //     map((res: Product | any) => {
  //       console.log(res);
  //       res.filter((x) => x.id === index);
  //       console.log(res);
  //     })
  //   );
  // }

  async getProductId(index: string) {
    const data = await fetch(this.url);
    const res = await data.json();
    console.log(res);
    const result = res.filter((item: any) => item.id === index);
    return result;
  }
}
