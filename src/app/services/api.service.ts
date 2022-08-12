
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://electronis-api.herokuapp.com/api/phones';

  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.http.get<any>(this.url)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
