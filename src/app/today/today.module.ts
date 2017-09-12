import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { TodayPage } from './today';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(TodayPage)
  ],
  declarations: [
    TodayPage
  ],
  entryComponents: [
    TodayPage
  ]
})
export class TodayPageModule { }
