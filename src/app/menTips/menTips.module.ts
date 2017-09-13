import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenTipsPage } from './menTips';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenTipsPage)
  ],
  declarations: [
    MenTipsPage
  ],
  entryComponents: [
    MenTipsPage
  ]
})
export class MenTipsPageModule { }