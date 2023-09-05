import { Injectable } from '@angular/core';
import { Products } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getproductbyid(id:number):Products{
    return this.getall().find(product=>product.id==id)!;
  }

  getall():Products[]{
return[{

  id:1,
  price:120,
  name:'Mens Shirt',
  notfavourite:true,
  star:3.0,
  tags:['shirt','summer','stylish'],
  image:'assets/images/image1.jpg',
  origins:['Rajahmundry','Hyderabad','Nellore'],
  Time:'2-3days'

},
{
  id:2,
  price:80,
  name:'Watches',
  notfavourite:false,
  star:5.0,
  tags:['summer','stylish'],
  image:'assets/images/2.jpg',
  origins:['Rajahmundry','Hyderabad','Eluru'],
  Time:'2-3days'

},
{
  id:3,
  price:150,
  name:'Sneakers',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/3.jpg',
  origins:['Vizag','Hyderabad','Eluru'],
  Time:'2-3days'

},
{
  id:4,
  price:180,
  name:'Formal Shirt',
  notfavourite:false,
  star:4.0,
  tags:['summer','stylish'],
  image:'assets/images/4.jpg',
  origins:['Vizag','Hyderabad','Banglore'],
  Time:'2-3days'

},
{
  id:5,
  price:220,
  name:'Striped Shirts',
  notfavourite:false,
  star:4.0,
  tags:['summer','stylish'],
  image:'assets/images/5.jpg',
  origins:['vijaywada','Hyderabad','Banglore'],
  Time:'2-3days'

},
{
  id:6,
  price:140,
  name:'Watch',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/6.jpg',
  origins:['vijaywada','Rajahmundry','Banglore'],
  Time:'2-3days'

},
{
  id:7,
  price:150,
  name:'SweatShirts',
  notfavourite:true,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/7.jpg',
  origins:['vijaywada','vizag','Banglore'],
  Time:'2-3days'

},
{
  id:8,
  price:250,
  name:'High top sneakers',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/8.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'2-3days'

},
{
  id:9,
  price:30,
  name:'Black Sneakers',
  notfavourite:true,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/9.jpg',
  origins:['vijaywada','Rajahmundry','Banglore'],
  Time:'2-3days'

},
{
  id:10,
  price:80,
  name:'Tshirt',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/10.jpg',
  origins:['vijaywada','Rajahmundry','hyderabad'],
  Time:'2-3days'

},
{
  id:11,
  price:150,
  name:'Jackets',
  notfavourite:false,
  star:4.0,
  tags:['summer','stylish'],
  image:'assets/images/11.jpg',
  origins:['vijaywada','Chennai'],
  Time:'2-3days'

},
{
  id:12,
  price:110,
  name:'Sweaters',
  notfavourite:false,
  star:3.0,
  tags:['winter','stylish'],
  image:'assets/images/12.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'2-3days'

},
{
  id:13,
  price:180,
  name:'Braclets',
  notfavourite:false,
  star:4.0,
  tags:['summer','stylish'],
  image:'assets/images/13.jpg',
  origins:['vijaywada','Banglore','vizag'],
  Time:'2-3days'

},
{
  id:14,
  price:50,
  name:'Denim Shirts',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/14.jpg',
  origins:['vijaywada','Rajahmundry','Chennai'],
  Time:'2-3days'

},
{
  id:15,
  price:40,
  name:'White Tshirt',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/15.jpg',
  origins:['vijaywada','Chennai'],
  Time:'2-3days'

},
{
  id:16,
  price:120,
  name:'Wallet',
  notfavourite:false,
  star:3.0,
  tags:['summer','stylish'],
  image:'assets/images/16.jpg',
  origins:['vijaywada','Chennai','Banglore'],
  Time:'2-3days'

}]
  }
}
