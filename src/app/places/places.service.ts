import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    places: Place[] = [
    {
      id: 'p1',
      title: 'Castle Mansion',
      description: 'In New York',
      imageUrl: 'https://static1.mansionglobal.com/production/media/article-images/19a538cb0caa9f8ffca9a4375babcc21/small_3113.jpg',
      price: 420.59
    },
    {
      id: 'p2',
      title: 'Modern Townhome',
      description: 'In London',
      imageUrl: 'https://static3.mansionglobal.com/production/media/article-images/c5cbd92b3015ba8c4c4500d00f559e66/small_Carlyle-Square_1.jpg',
      price: 280.59
    },
    {
      id: 'p3',
      title: 'Glass Cottage',
      description: 'In Thailand',
      imageUrl: 'https://q-cf.bstatic.com/images/hotel/max1024x768/373/37342835.jpg',
      price: 58.80 
}
  ]

  constructor() { }


  getPlaces() {
    return this.places
  }

  getPlace(id: any): any {
    const filteredPlace = this.places.filter(place => place.id == id)[0];
    return filteredPlace;
  }

}
