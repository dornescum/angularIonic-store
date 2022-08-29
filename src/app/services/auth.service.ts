import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  // FIXME nu comunica state !logged
  public isAuthenticated(): boolean {
    const userAuthenticated = false; // Get the current authentication state from a Service!

    if (userAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}
