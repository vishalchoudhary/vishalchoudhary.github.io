import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import { map } from 'rxjs/operators';
import "rxjs/add/operator/map";
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  saveRecipes() {
    const token = this.authService.getToken();

    return this.http.put(
      "https://ng-recipe-app-188bb.firebaseio.com/recipes.json?auth=" + token,
      this.recipeService.getRecipes())
      .map((response: Response) => response.json()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get("https://ng-recipe-app-188bb.firebaseio.com/recipes.json?auth=" + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe.hasOwnProperty("ingredients")) {
            recipe.ingredients = [];
          }
        }
        return recipes;
      });
  }
}
