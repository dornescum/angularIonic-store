import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TestingService {
  assignValue() {
    const testingObservable = new Observable((observer) => {
      observer.next('Angular');
    });
    return testingObservable;
  }
}
