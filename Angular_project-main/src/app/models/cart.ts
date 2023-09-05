import { Cartitem } from "./cartitem";

export class Cart {
    items:Cartitem[]=[];

    get totalPrice():number{
        let totalPrice=0;
    this.items.forEach(item=>{
        totalPrice +=item.price;
    })
 return totalPrice;
}
}