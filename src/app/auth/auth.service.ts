import { Injectable } from '@angular/core';
import * as Firebase from "firebase";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;

  constructor(
    private router: Router
  ) { }

  signupUser(email: string, password: string) {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.error(error));
  }

  signinUser(email: string, password: string) {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(["/"]);
        Firebase.auth().currentUser.getToken()
          .then(token => {
            console.log("got token at sign in");
            this.token = token;
          });
      })
      .catch(error => console.error(error));
  }

  getToken() {
    Firebase.auth().currentUser.getToken()
      .then(token => this.token = token);

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signoutUser() {
    Firebase.auth().signOut()
      .then(response => this.router.navigate(["/"]));
    this.token = null;
  }

}
