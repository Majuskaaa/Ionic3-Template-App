import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenSetIntroPage } from './menSetIntro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenSetIntroPage)
  ],
  declarations: [
    MenSetIntroPage
  ],
  entryComponents: [
    MenSetIntroPage
  ]
})
export class MenSetIntroPageModule { }
