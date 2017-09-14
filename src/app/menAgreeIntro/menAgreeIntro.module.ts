import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenAgreeIntroPage } from './menAgreeIntro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenAgreeIntroPage)
  ],
  declarations: [
    MenAgreeIntroPage
  ],
  entryComponents: [
    MenAgreeIntroPage
  ]
})
export class MenAgreeIntroPageModule { }
