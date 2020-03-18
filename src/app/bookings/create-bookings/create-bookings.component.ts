import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Booking } from '../booking.model';
import { PlacesService } from 'src/app/places/places.service';
import { BookingsService } from '../bookings.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {
  selectedPlace: Place
  booking: Booking = {
    id : '',
    placeId : this.selectedPlace.id,
    userId : '',
    guests : null,
    checkIn : new Date,
    nights: null,
    totalPrice: null,
  }

  bookingForm: FormGroup;


  constructor(
    private modalCtrl: ModalController, 
    private bookingService: BookingsService, 
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.getTotalPrice();
    this.booking.id = ''
    this.bookingForm = this.formBuilder.group({
      checkIn: null,
      nights: null,
      totalPrice: null
    })
  }

  incrementGuests(){
    this.booking.guests += 1;
    console.log('Nights:', this.booking.guests);
    this.getTotalPrice()
  }
    
  decrementGuests(){
    if(this.booking.guests-1 < 1){
      this.booking.guests = 1;
      console.log('Nights:' + this.booking.guests)
    }
    else{
      this.booking.guests -= 1;
      console.log('Nights:' + this.booking.guests);
    }
    this.getTotalPrice()
  }

  incrementQty(){
    this.booking.nights += 1;
    console.log('Nights:', this.booking.nights);
    this.getTotalPrice()
  }
    
  decrementQty(){
    if(this.booking.nights-1 < 1){
      this.booking.nights = 1;
      console.log('Nights:' + this.booking.nights)
    }
    else{
      this.booking.nights -= 1;
      console.log('Nights:' + this.booking.nights);
    }

  }

  getTotalPrice() {
    this.booking.totalPrice = (this.booking.nights * this.selectedPlace.price) + (this.booking.guests > 1 ? (this.booking.guests - 1)  * this.selectedPlace.addGuestFee : 0);
    console.log(this.booking.totalPrice)
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'Submitted!'}, 'confirm')
    this.bookingService.createBooking(this.bookingForm.value).subscribe((res: any) => {
      const id = res.id;
      this.router.navigate(['/bookings']);
    })
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel')
  }


}
