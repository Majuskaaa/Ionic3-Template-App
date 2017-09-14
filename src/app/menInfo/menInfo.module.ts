import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenInfoPage } from './menInfo';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenInfoPage)
  ],
  declarations: [
    MenInfoPage
  ],
  entryComponents: [
    MenInfoPage
  ]
})
export class MenInfoPageModule { }
