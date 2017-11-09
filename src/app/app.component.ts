import { Component, OnInit } from '@angular/core';
import * as Firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit(): void {
    Firebase.initializeApp({
      apiKey: "AIzaSyDY9v3WNdpoepPwS1IdgogvthUb9dsBtlI",
      authDomain: "ng-recipe-app-188bb.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
