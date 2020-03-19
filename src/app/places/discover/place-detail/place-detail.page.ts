import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateBookingsComponent } from 'src/app/bookings/create-bookings/create-bookings.component';
// import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {

  place: Place;
  placeId: string;
  favorited = false
  date: Date
  item_qty = 1

  constructor(
    private placesService: PlacesService, 
    private activatedRoute: ActivatedRoute, 
    private modalCtrl: ModalController 
    // private datePicker: DatePicker
    ) { }

  ngOnInit() {
    this.placeId = this.activatedRoute.snapshot.params['id']
    this.place = this.placesService.getPlace(this.placeId);
  }

  ionViewWillLeave() {
    // reset page properties for proper init/enter conditions
    this.place = undefined;
    this.placeId = undefined;
  }


  // chooseDate() {
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //   );
  // }

  onBookPlace() {
    this.modalCtrl
    .create({
      component: CreateBookingsComponent,
      componentProps: {selectedPlace: this.place}
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss()
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role)
      if (resultData.role === 'confirm') {
        console.log('booked')
      }
    })
  }

  ngOnDestroy() {

  }

  onFavorite() {
    this.placesService.addToFavorites(this.place.id)
    this.favorited = true
    console.log(this.place, 'Added to Favorites')
  }

}
