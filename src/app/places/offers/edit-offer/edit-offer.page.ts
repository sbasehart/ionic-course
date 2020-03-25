import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../../place.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  offer: Place;
  offerId: string;
  editOfferForm: FormGroup;

  constructor(
    private placesService: PlacesService, 
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private router: Router 
  ) { }

  ngOnInit() {
    this.offerId = this.activatedRoute.snapshot.params['id']
    this.offer = this.placesService.getPlace(this.offerId);
    this.editOfferForm = new FormGroup({
      title: new FormControl(this.offer.title),
      description: new FormControl(this.offer.description),      
      imageUrl: new FormControl(this.offer.imageUrl),      
      price: new FormControl(this.offer.price),
      addGuestFee: new FormControl(this.offer.addGuestFee)
    })
    console.log(this.offer)
  }

  ionViewWillLeave() {
    // reset page properties for proper init/enter conditions
    this.offer = undefined;
    this.offerId = undefined;
  }

  onSavePlace(){
    // this.offer =  this.placesService.createOffer(new Place)
    this.offerId = this.offer.id
    this.editOfferForm = this.placesService.updateOffer(this.offerId)
    this.router.navigate(['places/tabs/offers']);
  }

}
