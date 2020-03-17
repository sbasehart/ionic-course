import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Place[];

  constructor(private placesService: PlacesService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.getOffers();
    console.log(this.loadedOffers)
  }

  async delete() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            // this.deleteOffer(id);
          }
        }
      ]
    });

    await alert.present();
  }

  // deleteOffer(this.offer) {
  //   this.placesService.deleteOffer((this.offer);
  //   this.loadedOffers
  // }

}
