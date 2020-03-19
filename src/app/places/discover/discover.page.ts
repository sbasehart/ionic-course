import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listPlaces: Place[]

  constructor(private placesService: PlacesService,) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
    this.listPlaces = this.loadedPlaces.slice(1)
    console.log(this.loadedPlaces)
  }



}
