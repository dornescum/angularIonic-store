import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  phones = [
    {
      id: 'phone-1', title: 'phone-1', price: 399
    },
    {
      id: 'phone-2', title: 'phone-2', price: 299
    },
    {
      id: 'phone-3', title: 'phone-4', price: 499
    }
  ];
  constructor() { }
}
