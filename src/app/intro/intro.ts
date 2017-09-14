import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  

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

  ionViewDidEnter() {
      this.showAlert();
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

  setGender(gender:string) {
    this.userProfile.gender=gender;
    this.authService.updateProfile(this.userProfile).then(()=>{
      console.log(this.userProfile.gender)
      if(this.userProfile.gender === "M")
        this.navCtrl.setRoot("MenSetIntroPage");
      else if(this.userProfile.gender === "F")
        this.navCtrl.setRoot("SetIntroPage");
    });
  }

}
