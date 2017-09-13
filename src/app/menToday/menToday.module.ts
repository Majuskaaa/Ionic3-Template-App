import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenTodayPage } from './menToday';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenTodayPage)
  ],
  declarations: [
    MenTodayPage
  ],
  entryComponents: [
    MenTodayPage
  ]
})
export class MenTodayPageModule { }
