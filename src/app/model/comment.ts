export class Comment {
    constructor(
        public author: string,
        public message: string,
        public date: Date,
        //ajout de product id et comment Id
        public commenttId:string,
        public productId:string,

    ) {}
}
