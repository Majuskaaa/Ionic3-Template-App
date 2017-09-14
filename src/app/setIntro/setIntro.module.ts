import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { SetIntroPage } from './setIntro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(SetIntroPage)
  ],
  declarations: [
    SetIntroPage
  ],
  entryComponents: [
    SetIntroPage
  ]
})
export class setIntroPageModule { }
