import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { IntroPage } from './intro';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(IntroPage)
  ],
  declarations: [
    IntroPage
  ],
  entryComponents: [
    IntroPage
  ]
})
export class IntroPageModule { }
