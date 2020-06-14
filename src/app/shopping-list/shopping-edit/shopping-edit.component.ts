import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';

import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false; // if we are editing shoppingList items
  editedItemIndex: number;
  editedIngridientItem: Ingridient;
  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingList.shoppingEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedIngridientItem = this.shoppingList.getIngridient(index);

        // updating values from selected items in form
        this.slForm.setValue({
          name: this.editedIngridientItem.name,
          amount: this.editedIngridientItem.amount
        })
      }
    )
  }

  submitIngridient(form: NgForm) {
    const value = form.value
    const newIngridient = new Ingridient(value.name, value.amount);
    if(this.editMode){
      this.shoppingList.updateIngridient(this.editedItemIndex, newIngridient);
    }
    else{ 
        this.shoppingList.addIngridient(newIngridient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingList.deleteIngridient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
