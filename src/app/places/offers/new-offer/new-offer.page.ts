import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  offer: Place
  offerId: string;

  newOfferForm: FormGroup

  constructor(private placesService: PlacesService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.offer =  this.placesService.createOffer(new Place)
    this.newOfferForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),      
      imageUrl: new FormControl(null),      
      price: new FormControl(null),
      addGuestFee: new FormControl(null)
    })
  }

  onSavePlace(){
    // this.offer =  this.placesService.createOffer(new Place)
    this.offerId = this.offer.id
    this.newOfferForm = this.placesService.updateOffer(this.offerId)
    this.router.navigate(['places/tabs/offers']);
  }

}
