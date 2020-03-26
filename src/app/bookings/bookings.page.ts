import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { Place } from '../places/place.model';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  date: Date
  places: Place[]
  booking : Booking
  bookings : Booking[]
  bookedPlace: Place

  constructor(private bookingsService: BookingsService, private placesService:PlacesService) { }

  ngOnInit() {
    this.bookings = this.bookingsService.getBookings()
    // this.bookedPlace = this.bookings.map(this.bookings, this.bookings.property('placeId.aNumber'));

    this.places = this.bookingsService.getBookings()
    .map(booking => {
      this.placesService.getPlace(booking.placeId)
      return this.bookedPlace
    } );
  }

  // getBooking() {
  //   const id = this.booking.placeId;
  //   this.bookedPlace = this.placesService.getPlace(id)
  // }

  this() {
    console.log()
  }

  

}
