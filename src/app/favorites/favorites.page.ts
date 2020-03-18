import { Component, OnInit } from '@angular/core';
import { Place } from '../places/place.model';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favs: Place[];

  constructor(private placesService: PlacesService,) { }

  ngOnInit() {
    this.favs = this.placesService.getFavorites();
    console.log(this.favs)
  }


}
