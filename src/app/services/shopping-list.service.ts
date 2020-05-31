import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingridientsChanged = new Subject<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    {name: 'Tomatoes', amount: 10}
  ];

  constructor() { }

  addIngridient(ingridient: Ingridient){
    this.ingridients.push(ingridient);
    this.ingridientsChanged.next(this.ingridients.slice()); // subject uses next() to emit the data
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
}
