import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  offer: Place;
  offerId: string;

  constructor(
    private placesService: PlacesService, 
    private activatedRoute: ActivatedRoute,  
  ) { }

  ngOnInit() {
    this.offerId = this.activatedRoute.snapshot.params['id']
    this.offer = this.placesService.getPlace(this.offerId);
    console.log(this.offer)
  }

  ionViewWillLeave() {
    // reset page properties for proper init/enter conditions
    this.offer = undefined;
    this.offerId = undefined;
  }

}
