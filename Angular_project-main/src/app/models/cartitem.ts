import { Products } from "./product";

export class Cartitem {


    constructor(product:Products){

        this.product=product;
    }

    product:Products;
    quantity:number=1;

    get price():number{
        return this.product.price * this.quantity;
    }
}
