import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

import { Place } from '../places/place.model';
import { PlacesService } from '../places/places.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private _bookings = new BehaviorSubject<Booking[]>([
    new Booking(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Booking(
      'b1',
      'p2',
      'Summer',
      'Basehart',
      2,
      new Date("2020-02-12"),
      2,
      611.38
    )
  ]);

  get bookings() {
    return this._bookings.asObservable()
  }

  bookedPlace: Place

  randomId = Math.floor(Math.random() * 999)

  constructor(private placesService: PlacesService) { }

  getBookings() {
    return this.bookings
  }

  getBooking(id: any): any {
    return this.bookings.pipe(
      take(1),
      map(bookings => {
        return { ...bookings.find(p => p.id === id) };
      })
    );
  }

  editBooking(
    id: string, 
    placeId: string, 
    firstName: string, 
    lastName: string,
    guests: number,
    checkIn: Date,
    nights: number,
    totalPrice: number
    ){
    return this.bookings.pipe(
      take(1),
      delay(1000),
      tap(bookings => {
        const updatedBookingIndex = bookings.findIndex(pl => pl.id == id);
        const updatedBookings = [...bookings];
        const oldBooking = updatedBookings[updatedBookingIndex];
        updatedBookings[updatedBookingIndex] = new Booking(
          oldBooking.id,
          title,
          description,
          oldBooking.imageUrl,
          oldBooking.price,
          oldBooking.availableFrom,
          oldBooking.availableTo,
          oldBooking.userId
        );
        this._bookings.next(updatedBookings);
      })
    );
  }

  createBooking(
    id: string, 
    placeId: string, 
    firstName: string, 
    lastName: string,
    guests: number,
    checkIn: Date,
    nights: number,
    totalPrice: number
  ) {
    const newBooking = new Booking(
      Math.random().toString(),
      placeId, 
      firstName, 
      lastName,
      guests,
      checkIn,
      nights,
      totalPrice
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  deleteBooking(id: any): any {
    console.log(`Deleted booking ${id}`);
    const index = this.bookings.indexOf(id);
    this.bookings.splice(index, 1);
  }

  // nextBookingId(): string {
  //   const maxBookingId = this.bookings.reduce((max, item) => (item.id > max) ? item.id : max, this.bookings[0].id);
  //   const newBookingId = (maxBookingId + 1);
  //   return newBookingId;
  // }
}
