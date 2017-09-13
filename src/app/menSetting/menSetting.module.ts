import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenSettingPage } from './menSetting';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenSettingPage)
  ],
  declarations: [
    MenSettingPage
  ],
  entryComponents: [
    MenSettingPage
  ]
})
export class MenSettingPageModule { }
