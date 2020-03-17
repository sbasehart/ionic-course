import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {

  place: Place;
  placeId: string;

  item_qty = 1

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.placeId = this.activatedRoute.snapshot.params['id']
    this.place = this.placesService.getPlace(this.placeId);
  }

  incrementQty(){
    this.item_qty += 1;
    console.log(this.item_qty + 1);
  }
    
  decrementQty(){
    if(this.item_qty-1 < 1){
      this.item_qty = 1;
      console.log('item_1->' + this.item_qty)
    }
    else{
      this.item_qty -= 1;
      console.log('item_2->' + this.item_qty);
    }
  }

  ionViewWillLeave() {
    // reset page properties for proper init/enter conditions
    this.place = undefined;
    this.placeId = undefined;
  }

  ngOnDestroy() {

  }

}
