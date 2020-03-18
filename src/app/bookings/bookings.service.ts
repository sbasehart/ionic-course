import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookings: Booking[] = []

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
