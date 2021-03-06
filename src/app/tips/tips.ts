import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  public userProfile: UserModel;
  public uid: string = "";
  public day: DayModel = {
    "date": new Date()
  };
  public type: string = "jaro";
  public tip: string;
  public tips: any = {
    "jaro": "Fáze cyklu je příznivě nakloněna detoxikaci organismu. Toho dosáhnete nejlépe cvičením horké jógy a konzumací potravin s vysokým podílem vitamínů a živin. :-)",
    "léto": "--- ovulační fáze ---",
    "podzim": "V tomto období si dopřejete lehkou sportovní aktivitu, např. jízdu na kole. Hodně relaxujte a jezte potrviny bohaté na železo. Výborný tip je čaj z levandule a aromaterapie. Vyhýbejte se konfliktním situacím.",
    "zima": "--- menstruační fáze ---",
  };

  constructor(
    public navCtrl: NavController, 
    public authService: AuthService,
  ) {
    
  }

  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
    });
    this.tip = this.tips[this.type]
  }

  goToToday() {
    this.navCtrl.push("TodayPage");
  }

  goToList() {
    this.navCtrl.push("ListPage");
  }

  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

}
