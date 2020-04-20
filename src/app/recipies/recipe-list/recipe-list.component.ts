import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipes: Recipe[] = [
  new Recipe(1, 'Red Velvet Cake', 'First recipe', 'https://spoonacular.com/recipeImages/579247-556x370.jpg'),

  {id: 2, name: 'Second Recipe', description: 'This is test recipe', imagePath: 'https://spoonacular.com/recipeImages/579247-556x370.jpg'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
