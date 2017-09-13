import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { SettingPage } from './setting';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(SettingPage)
  ],
  declarations: [
    SettingPage
  ],
  entryComponents: [
    SettingPage
  ]
})
export class SettingPageModule { }
