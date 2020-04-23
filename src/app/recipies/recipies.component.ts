import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  @Input() recipeSelected: Recipe;
  
  constructor() { }

  ngOnInit(): void {

  }

  // getting the selected recipe-item form recipe-list element, and assigning it to input property
  recipeElSelected(data: Recipe){
    this.recipeSelected = data;
  }

}
