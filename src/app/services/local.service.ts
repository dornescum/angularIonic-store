import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Local} from 'src/app/shared/Local';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocalService {
  private url = '/assets/data/localPhones.json';

  constructor(private http: HttpClient) {
  }

  getPhones(): Observable<Local[]> {
    return this.http.get<Local[]>(this.url);
  }
}
