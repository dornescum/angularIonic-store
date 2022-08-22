import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LocalService {
  private url = '/assets/data/localPhones.json';
  constructor(private http: HttpClient) {}
  getPhones() {
    return this.http.get(this.url)
  }
}
 