import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // creating output property to emit recipe selected from recipe-item
  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

 recipes: Recipe[] = [
  new Recipe(1, 'Red Velvet Cake', 'First recipe', 'https://spoonacular.com/recipeImages/579247-556x370.jpg'),

  {id: 2, name: 'Fruit Platter', description: 'Enjoy the taste of fresh and juicy fruits, at any time of the day !!', imagePath: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80'},

  {id: 3, name: 'Eggy Eggs', description: 'Eggs all cozy in a garlic herbed yogurt, topped with a spicy coconut butter and sitting on a piece..!!', imagePath: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&w=1000&q=80'}
];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }

}
