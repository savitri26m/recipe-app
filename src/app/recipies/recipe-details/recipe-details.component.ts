import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeItemSelected: Recipe;
  id: number;

  constructor(private route: ActivatedRoute, 
      private recipeService: RecipeService,
      private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeItemSelected = this.recipeService.getRecipe(this.id);
      }
    )
  }

  // adding ingridients from recipeDetails component to Shopping List service
  addToShoppingList() {
    this.recipeService.addIngridientsToSL(this.recipeItemSelected.ingridients);
    this.router.navigate(['/shopping-list']);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // alternate methods, which is complex route
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

}
