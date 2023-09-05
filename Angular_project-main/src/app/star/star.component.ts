import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Products } from '../models/product';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent{
  starClassName = "star-rating-blank";
  @Input() starId!: number;
  @Input() rating!: number;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

 
  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }


}
