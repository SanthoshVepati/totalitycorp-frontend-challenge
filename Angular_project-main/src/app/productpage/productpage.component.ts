import { Component, EventEmitter,Input,Output } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../models/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {

  products:Products[]=[];
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;
  starClassName = "star-rating-blank";
  starId!:number;
  searchText!:any;  
  constructor(private productService:ProductService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    

    this.products=this.productService.getall();

    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }
  enter(i:any) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i:any) {
    this.rating = i;
  }
}
