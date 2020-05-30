import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent } from '../recipies/recipies.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipies/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from '../recipies/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipiesComponent, children: [
    { path: '', component: RecipeStartComponent },
    {path: ':id', component: RecipeDetailsComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
