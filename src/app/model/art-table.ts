    import{ Comment }from "@angular/compiler";
import { Category } from "./category";

export class ArtTable {

    constructor(
        public id:string,
        public name:string,
        public photo:string,
        public height : number ,
        public width : number,
        public painter : string,
        public price: number,
        public quantity: number,
        public disponibility: boolean,
        public dateCreate: Date,
        public comments: Comment[] = [],
        public category: Category,
        public nbLikes :number,
        public description?: string,
        public discount? : number,

    ){}

}
