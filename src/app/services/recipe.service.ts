import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // this event which passes an array of recipes as a value
  recipesChanged = new Subject<Recipe[]> ();

  constructor(private shoppingList: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(1, 'Red Velvet Cake', 'First recipe', 'https://spoonacular.com/recipeImages/579247-556x370.jpg',
    [ new Ingridient('Eggs', 2) ]),
  
    {
      id: 2, name: 'Fruit Platter',
     description: 'Enjoy the taste of fresh and juicy fruits, at any time of the day !!', 
      imagePath: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80',
      ingridients: [new Ingridient('Oranges', 2), new Ingridient('Apples', 2)  ]
    },
  
    {
      id: 3, name: 'Eggy Eggs', 
      description: 'Eggs all cozy in a garlic herbed yogurt, topped with a spicy coconut butter and sitting on a piece..!!', 
      imagePath: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&w=1000&q=80',
      ingridients: [
        {name: 'eggs', amount: 5},
        {name: 'garlic', amount: 2}
      ]
    }
  ];

  getRecipes(){
    // to create copy of recipes array, and preserve original array
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    // this emits a new copy of recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    // this emits a new copy of recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  addIngridientsToSL(ingridient: Ingridient[]) {
    this.shoppingList.ingridientsToShoppingList(ingridient);
  }

  deleteRecipe(index: number){
    // delete the recipe and emit the updated recipes array
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
