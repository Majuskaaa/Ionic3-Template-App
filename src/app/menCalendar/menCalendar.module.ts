import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenCalendarPage } from './menCalendar';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenCalendarPage)
  ],
  declarations: [
    MenCalendarPage
  ],
  entryComponents: [
    MenCalendarPage
  ]
})
export class MenCalendarPageModule { }
