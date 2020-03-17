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

  orderId: string;
  order: Place;

  constructor(
    private placesService: PlacesService, 
    private activatedRoute: ActivatedRoute,  
  ) { }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params['id']
    this.order = this.placesService.getOffer(this.orderId);
  }

}
