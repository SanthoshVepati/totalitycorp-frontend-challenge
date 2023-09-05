import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  constructor(private route:Router) { }
  ngOnInit(): void {
    
  }
  OrderNow(){
    this.route.navigateByUrl('/login')
  }
}
