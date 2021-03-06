import { PlaceprofilePage } from '../index.pages';
import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PorcategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-percategories',
  templateUrl: 'percategories.html',
})
export class PercategoriesPage {

  categoria:any = {};
  profilePage = PlaceprofilePage;
  places:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private ps: PlacesProvider) {
    //console.log(this.navParams.get("categoria"));
    this.categoria = this.navParams.get("categoria");
    this.places =[];
    this.ps.cargar_por_cate(this.categoria._id);
    this.getPlacesByCategory();
 
  }
  

  goTo(){
    this.navCtrl.push(this.profilePage);
  }


  getPlacesByCategory(){
    this.ps.getPlaceByCategory(this.categoria._id).subscribe(
      result => {
        this.places = result;
      }
    )
  }
}
