import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true
  isSignup = false

  constructor(
    private authService: AuthService, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login()
    this.navCtrl.navigateForward('places')
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email
    const password = form.value.password
    
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin,
    this.isSignup = !this.isSignup
  }


}
