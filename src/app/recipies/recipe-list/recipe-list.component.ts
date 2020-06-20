import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // creating output property to emit recipe selected from recipe-item
  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

  subscription: Subscription;

 recipes: Recipe[];

  constructor(private recipesService: RecipeService,
      private router: Router,
      private route: ActivatedRoute ) { }

  ngOnInit(): void {
// listeing to the recipes Changed event and subscribing to the new changes and 
// using new recipes recived to populate data
     this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipesArr: Recipe[]) => {
        this.recipes = recipesArr
      }
    )

    this.recipes = this.recipesService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }

  newRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
