import { Component, OnInit } from '@angular/core';
import { Place } from '../places/place.model';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  loadedFavs: Place[];

  constructor(private placesService: PlacesService,) { }

  ngOnInit() {
    this.loadedFavs = this.placesService.getFavorites();
    console.log(this.loadedFavs)
  }


}
