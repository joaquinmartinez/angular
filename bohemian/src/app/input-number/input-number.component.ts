import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  constructor() {}

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }
  downQuantity(): void{
    if(this.quantity > 0) 
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  upQuantity(): void{
     if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
     }
    }

  changeQuantity(event: Event): void{
    console.log(event);
    this.quantityChange.emit(this.quantity);
  }

}
