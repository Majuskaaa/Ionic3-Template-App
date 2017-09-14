import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { InfoPage } from './info';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(InfoPage)
  ],
  declarations: [
    InfoPage
  ],
  entryComponents: [
    InfoPage
  ]
})
export class InfoPageModule { }
