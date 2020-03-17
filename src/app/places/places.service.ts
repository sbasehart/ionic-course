import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  getorder(orderId: any): any {
    throw new Error("Method not implemented.");
  }
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

  offers: Place[] = [
    {
      id: 'p4',
      title: 'Floating Bunglaow',
      description: 'African East Coast',
      imageUrl: 'https://www.smartertravel.com/uploads/2016/09/Indian-Ocean-Fish-River-Lagoon-e1502380626140.jpg',
      price: 300.59
    },
    {
      id: 'p5',
      title: 'Old Country Home',
      description: 'In Canada',
      imageUrl: 'https://www.propertyguides.com/canada/media/sites/22/canada-country-home-2.jpg',
      price: 299.59
    },
  ]

  allPlaces: Place[] = this.offers.concat(this.places);

  constructor() { }


  getPlaces() {
    return this.allPlaces
  }

  getPlace(id: any): any {
    const filteredPlace = this.allPlaces.filter(place => place.id == id)[0];
    return filteredPlace;
  }

  getOffers() {
    return this.offers
  }

  getOffer(id: any): any {
    const filteredOffer = this.offers.filter(offer => offer.id == id)[0];
    return filteredOffer;
  }

  editOffer(id: any): any{
    const filteredOffer = this.offers.filter(offer => offer.id == id)[0];
    return filteredOffer;
  }

  deleteOffer(id: any): any {
    console.log(`Deleted offer ${id}`);
    const index = this.offers.indexOf(id);
    this.offers.splice(index, 1);
  }

}
