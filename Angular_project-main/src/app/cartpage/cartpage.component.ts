import { Component } from '@angular/core';
import { Cart } from '../models/cart';
import { Cartitem } from '../models/cartitem';
import { Products } from '../models/product';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  cart!:Cart;
  constructor(private cartservice:CartService, private route:Router) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  
setCart(){
  this.cart=this.cartservice.getCart();
}

  removeFromCart(Cartitem:Cartitem):void{
    this.cartservice.removeFromCart(Cartitem.product.id);
    this.setCart();
  }

  changeQuantity(cartItme:Cartitem,quantityInString:string){
    
    const quantity =parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItme.product.id,quantity);
    this.setCart();

  }

  checkout(){
    this.route.navigateByUrl('/checkout');
  }

}
