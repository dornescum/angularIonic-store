import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LocalProduct} from 'src/app/shared/LocalProduct';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocalService {
  // private url = '/assets/data/localPhones.json';
  private url = 'https://electronis-api.herokuapp.com/api/phones';

  constructor(private http: HttpClient) {
  }

  getPhones(): Observable<LocalProduct[]> {
    return this.http.get<LocalProduct[]>(this.url);
  }
}
