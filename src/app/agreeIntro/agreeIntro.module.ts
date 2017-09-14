import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { AgreeIntroPage } from './agreeIntro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(AgreeIntroPage)
  ],
  declarations: [
    AgreeIntroPage
  ],
  entryComponents: [
    AgreeIntroPage
  ]
})
export class AgreeIntroPageModule { }
