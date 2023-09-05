import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Cartitem } from '../models/cartitem';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart=new Cart();
  constructor() { }

  addToCart(product:Products):void{
    let cartItem = this.cart.items.find(item=> item.product.id === product.id)

    if(cartItem){
      this.changeQuantity(product.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new Cartitem(product));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.product.id !=foodId)
  }

  changeQuantity(quantity:number,foodId:number){
    let cartItem=this.cart.items.find(item => item.product.id === foodId);

    if(!cartItem) return;
    cartItem.quantity=quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}

