import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { setIntroPage } from './setIntro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(setIntroPage)
  ],
  declarations: [
    setIntroPage
  ],
  entryComponents: [
    setIntroPage
  ]
})
export class setIntroPageModule { }
