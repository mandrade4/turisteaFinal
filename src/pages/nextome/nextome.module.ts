import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextomePage } from './nextome';

@NgModule({
  declarations: [
    NextomePage,
  ],
  imports: [
    IonicPageModule.forChild(NextomePage),
  ],
})
export class NextomePageModule {}
