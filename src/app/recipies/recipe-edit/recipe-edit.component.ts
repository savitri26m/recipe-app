import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, 
      private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // checking if we want to edit recipe or add new recipe
        this.editMode = params['id'] != null;
        console.log(this.editMode) ;
        this.initForm();
      }
    )
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridients = new FormArray([]); //if recipe is created without ingridients

    // if we want to edit recipes
    if(this.editMode){
      // getting selected recipe using id
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      // if we have ingredients for a particular recipe
      if(recipe['ingridients']){
        // looping through each ingredients 
        for(let ing of recipe.ingridients){
          recipeIngridients.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount,[ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingridients': recipeIngridients
    })
  }  // init form ends


  // getting the ingridients peoperty from recioeForm and adding new Form group which contains ingridients form controls
  onAddIngridient() {
    (<FormArray>this.recipeForm.get('ingridients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
      })
    )
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingridients')).controls;
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

}
