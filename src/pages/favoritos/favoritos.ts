import { FavoritosProvider } from './../../providers/favoritos/favoritos';
import { Component } from '@angular/core';
import { PlaceprofilePage } from '../placeprofile/placeprofile';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  profilePage = PlaceprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private fP: FavoritosProvider, private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

}
