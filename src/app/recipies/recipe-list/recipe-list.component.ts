import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // creating output property to emit recipe selected from recipe-item
  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

 recipes: Recipe[];

  constructor(private recipesService: RecipeService,
      private router: Router,
      private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }

  newRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
