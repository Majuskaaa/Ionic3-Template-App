import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { TipsPage } from './tips';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(TipsPage)
  ],
  declarations: [
    TipsPage
  ],
  entryComponents: [
    TipsPage
  ]
})
export class TipsPageModule { }
