import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingridientsChanged = new Subject<Ingridient[]>();
  shoppingEditing = new Subject<number>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    {name: 'Tomatoes', amount: 10},
    {name: 'Eggs', amount: 10}
  ];

  constructor() { }

  addIngridient(ingridient: Ingridient){
    this.ingridients.push(ingridient);
    this.ingridientsChanged.next(this.ingridients.slice()); // subject uses next() to emit the data
  }


  // returns ingridient we want to edit in shoppingList
  getIngridient(i: number){
    return this.ingridients[i];
  }

  // pushing array of ingridients received into ingridients list in Shopping List
  ingridientsToShoppingList(ingridient: Ingridient[]){
    // alternate method to push data to ingridients array
    // for(let i of ingridient){
    //   this.addIngridient(i)
    // } 
    // ---------- OR -------------------
    this.ingridients.push(...ingridient);
    this.ingridientsChanged.next(this.ingridients.slice()); // subject uses next() to emit the data
  }

  getIngridients(){
    return this.ingridients.slice();
  }

  updateIngridient(index: number, newIngridient: Ingridient){
    this.ingridients[index] = newIngridient;
    this.ingridientsChanged.next(this.ingridients.slice());
  }

  deleteIngridient(index: number){
    this.ingridients.splice(index, 1);
    this.ingridientsChanged.next(this.ingridients.slice());
  }
}
