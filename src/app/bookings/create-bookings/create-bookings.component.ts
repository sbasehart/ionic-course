import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {

  item_qty = 1
  date: Date

  constructor() { }

  ngOnInit() {}

  incrementQty(){
    this.item_qty += 1;
    console.log('Nights:', this.item_qty);
  }
    
  decrementQty(){
    if(this.item_qty-1 < 1){
      this.item_qty = 1;
      console.log('Nights:' + this.item_qty)
    }
    else{
      this.item_qty -= 1;
      console.log('Nights:' + this.item_qty);
    }
  }


}
