import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  offer: Place;
  offerId: string;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.createOffer(this.offer)
  }

}
