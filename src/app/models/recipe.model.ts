import { Ingridient } from "../shared/ingridient.model";

export class Recipe {
   public id:number;
   public name: string;
   public description: string;
   public imagePath: string;
   public ingridients: Ingridient[];

    constructor(id: number, name: string, desc: string, imgPath: string, ingridients: Ingridient[] ){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath  = imgPath;
        this.ingridients = ingridients;
    }
}