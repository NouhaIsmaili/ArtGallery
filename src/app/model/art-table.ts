import { Category } from "./category";
import { Comment } from "./comment";
export class ArtTable {
    push(value: any) {
      throw new Error('Method not implemented.');
    }

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
        public description: string,
        public discount : number,
        public nbLikes :number,
    ){}

}
