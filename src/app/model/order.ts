import { ArtTable } from "./art-table";

export class Order {
        constructor(
            public idOrder: number,
            public userName: string, 
            public userPhoneNumber: number,
           public userAdress : string,
            public ordredProducts: ArtTable [], 
            public total: number, 
            public orderDate: Date 
        ) {}
    }
    
