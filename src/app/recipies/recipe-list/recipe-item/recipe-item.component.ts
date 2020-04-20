import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Passing data form Recipe List component to Recipe Item component using @Input() & property binding
  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
