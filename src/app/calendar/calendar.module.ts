import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { CalendarPage } from './calendar';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(CalendarPage)
  ],
  declarations: [
    CalendarPage
  ],
  entryComponents: [
    CalendarPage
  ]
})
export class CalendarPageModule { }
