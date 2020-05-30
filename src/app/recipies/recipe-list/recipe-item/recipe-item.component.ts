import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Passing data form Recipe List component to Recipe Item component using @Input() & property binding
  @Input() recipeItem: Recipe;
  @Input() recipeId: number;

  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

}
