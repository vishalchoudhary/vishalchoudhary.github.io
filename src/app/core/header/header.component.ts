import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    public authService: AuthService
  ) {}

  onSaveRecipes() {
    this.dataStorageService.saveRecipes()
      .subscribe((recipes: Array<Recipe>) => console.log(recipes));
  }

  onFetchRecipes() {
    this.dataStorageService.getRecipes()
      .subscribe(
        (recipes: Recipe[]) => this.recipeService.setRecipes(recipes)
      );
  }

  onSignout() {
    this.authService.signoutUser();
  }
}
