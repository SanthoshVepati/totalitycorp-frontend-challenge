import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../models/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent {
   product!:Products;
   constructor(private activatedRoute:ActivatedRoute,
     private productService:ProductService,
     private cartservice:CartService,
     private router:Router){

      activatedRoute.params.subscribe(params=>{


         if(params['id']){
          this.product=productService.getproductbyid(params['id']);
         }
      })
     }

     ngOnit():void{

     }
     addToCart(){
      this.cartservice.addToCart(this.product);
      this.router.navigateByUrl('/cartpage')
     }
}
