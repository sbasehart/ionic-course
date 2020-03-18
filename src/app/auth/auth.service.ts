import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userIsAuthenticated = false

  constructor() { }

  login() {
    this.userIsAuthenticated = true
  }

  signup() {

  }

  logout() {
    this.userIsAuthenticated = false
  }
}
