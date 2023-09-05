import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../models/details';
import { DetailsService } from '../service/details.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  details:Details=new Details();
  constructor(private route:Router,private service:DetailsService) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.service.userdetails(this.details).subscribe((data=>{
      alert('successfully inserted');     
    }))
    this.route.navigateByUrl('/payments');
  }
 
}
