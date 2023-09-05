import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-undermaintenance',
  templateUrl: './undermaintenance.component.html',
  styleUrls: ['./undermaintenance.component.css']
})
export class UndermaintenanceComponent implements OnInit {
  constructor(private rote:Router){}

  ngOnInit(): void {
    
  }
  main(){
    this.rote.navigateByUrl('');
   }

}
