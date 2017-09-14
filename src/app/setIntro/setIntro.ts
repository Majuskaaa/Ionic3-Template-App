import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController} from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

@IonicPage()
@Component({
  selector: 'page-setIntro',
  templateUrl: 'setIntro.html',
})
export class SetIntroPage {

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

  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
    });
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
        this.goToMenSetIntro();
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

  goToList() {
    this.navCtrl.push("ListPage");
  }

  goToIntro() {
    this.navCtrl.push("IntroPage");
  }


  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

  goToMenSetIntro() {
    this.navCtrl.push("MenSetIntroPage");
  }

  goToAgreeIntro() {
    this.navCtrl.push("AgreeIntroPage");
  }

}
