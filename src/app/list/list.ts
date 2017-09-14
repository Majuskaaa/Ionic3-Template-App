import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public userProfile: UserModel;
  public uid: string = "";
  public day: DayModel = {
    "date": new Date()
  };

  constructor(
    public navCtrl: NavController, 
    public authService: AuthService,
    public viewCtrl: ViewController
  ) {
    
  }


  ionViewWillEnter() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
      if(!this.navCtrl.isActive(this.viewCtrl))
      return;
      if (!this.userProfile.gender) {
        this.goToIntro();
      }
      else if(this.userProfile.gender==='M') {
        this.goToMenList();
      } 
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

  goToInfo() {
    this.navCtrl.push("InfoPage");
  }

  goToIntro() {
    this.navCtrl.push("IntroPage");
  }

  goToMenList() {
    this.navCtrl.push("MenListPage");
  }


  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

}
