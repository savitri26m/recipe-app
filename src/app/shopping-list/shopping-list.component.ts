import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingridients: Ingridient[];
  private igChangedSub: Subscription;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingList.getIngridients();
    this.igChangedSub = this.shoppingList.ingridientsChanged.subscribe(
      (data: Ingridient[]) => {
        this.ingridients = data;
      }
    )
  }

  ngOnDestroy(): void {
    // we have to unscubscribe the observable to avoid memory leak issues 
    this.igChangedSub.unsubscribe();
  }

}
