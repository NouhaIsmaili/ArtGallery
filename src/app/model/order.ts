import { ArtTable } from "./art-table";

export class Order {
        constructor(
            public idOrder: string,
            public clientName: string, 
            public clientPhoneNumber: number,
           public clientAdress : string,
            public ordredProducts: ArtTable [], 
            public total: number, 
            public orderDate: Date 
        ) {}
    }
    
