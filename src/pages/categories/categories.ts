import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PercategoriesPage } from "../index.pages";


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  porCategorias = PercategoriesPage;
  categories:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ps: PlacesProvider) {
 
    this.categories = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
    this.getCategories();
  }

  getCategories(){
    this.ps.getCategories().subscribe(
      (result)=>{
        this.categories = result.categorias;
        console.log(result);
      }
    )
  }

}
