import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agreeIntro',
  templateUrl: 'agreeIntro.html',
})
export class AgreeIntroPage {
  

  public userProfile: UserModel;
  public uid: string = "";
  public day: DayModel = {
    "date": new Date()
  };

  constructor(
    public navCtrl: NavController, 
    public authService: AuthService,
    public alertCtrl: AlertController,
  ) {
    
  }

  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
    });
  }


  goToToday() {
    this.navCtrl.push("TodayPage");
  }

  goToCalendar() {
    this.navCtrl.push("CalendarPage");
  }

  goToTips() {
    this.navCtrl.push("TipsPage");
  }

  goToSetting() {
    this.navCtrl.push("SettingPage");
  }


  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Vítejte!',
      subTitle: 'Pro správné fungování aplikace je třeba vyplnit pár údajů...',
      buttons: ['Jdeme na to!']
    });
    alert.present();
  }


}
