import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenListPage } from './menList';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenListPage)
  ],
  declarations: [
    MenListPage
  ],
  entryComponents: [
    MenListPage
  ]
})
export class MenListPageModule { }
