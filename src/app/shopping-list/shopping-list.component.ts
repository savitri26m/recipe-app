import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingList.getIngridients();
    this.shoppingList.ingridientsChanged.subscribe(
      (data: Ingridient[]) => {
        this.ingridients = data;
      }
    )
  }

}
