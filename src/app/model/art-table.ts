    import{ Comment }from "@angular/compiler";

export class ArtTable {

    constructor(
        
        public name:string,
        public id:string,
        public photo:string,
        public height : number ,
        public width : number,
        public painter : string,
        public price: number,
        public quantity: number,
        public disponibility: boolean,
        public dateCreate: Date,
        public comments: Comment[] = [],
        public category: string,
        public state:string='En cours',
        public nbLikes :number,
        public description?: string,
        public discount? : number,

    ){}

}
