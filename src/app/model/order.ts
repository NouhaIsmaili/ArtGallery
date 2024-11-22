import { ArtTable } from "./art-table";

export class Order {
        constructor(
            public id: string,
            public clientName: string, 
            public clientPhoneNumber: number,
           public clientAdress : string,
            public ordredProducts: [{"article":ArtTable ,"qte":number}], 
            public total: number, 
            public orderDate: Date ,
            public state:string
        ) {}
    }
    
