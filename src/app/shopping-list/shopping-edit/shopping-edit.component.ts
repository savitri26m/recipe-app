import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; 


  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngridient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingridient(name, amount);

    this.shoppingList.addIngridient(newIngridient);
  }

}
