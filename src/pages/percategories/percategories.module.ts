import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PercategoriesPage } from './percategories';

@NgModule({
  declarations: [
    PercategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(PercategoriesPage),
  ],
})
export class PercategoriesPageModule {}
