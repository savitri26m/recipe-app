import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Passing data form Recipe List component to Recipe Item component using @Input() & property binding
  @Input() recipeItem: Recipe;

  // creating output property to emit selected recipe item
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
   }

  ngOnInit(): void {
  }

  selectRecipe(){
    this.recipeSelected.emit();
  }

}
