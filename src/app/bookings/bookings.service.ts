import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private _bookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'p2',
      firstName: 'Summer',
      lastName: 'Basehart',
      guests: 2,
      checkIn: new Date("2020-02-12"),
      nights: 2,
      totalPrice: 611.38,
    }
  ]
  get bookings() {
    return [...this._bookings]
  }

  randomId = Math.floor(Math.random() * 999)

  constructor() { }

  getBookings() {
    return this.bookings
  }

  getBooking(id: any): any {
    const filteredBooking = this.bookings.filter(booking => booking.id == id)[0];
    return filteredBooking;
  }

  editBooking(id: any): any{
    const filteredBooking = this.bookings.filter(booking => booking.id == id)[0];
    return filteredBooking;
  }

  createBooking(newBooking: Booking): any {
    newBooking.id = 'b' + this.randomId.toString()
    this.bookings.push(newBooking);
    return newBooking.id;
  }

  deleteBooking(id: any): any {
    console.log(`Deleted booking ${id}`);
    const index = this.bookings.indexOf(id);
    this.bookings.splice(index, 1);
  }

  nextBookingId(): string {
    const maxBookingId = this.bookings.reduce((max, item) => (item.id > max) ? item.id : max, this.bookings[0].id);
    const newBookingId = (maxBookingId + 1);
    return newBookingId;
  }
}
