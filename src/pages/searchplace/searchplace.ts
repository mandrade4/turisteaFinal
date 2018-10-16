import { PlaceprofilePage } from '../index.pages';
import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-searchplace',
  templateUrl: 'searchplace.html',
})
export class SearchplacePage {

  profilePage = PlaceprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ps: PlacesProvider) {
    //this.initializeItems();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  regresar(){
    this.navCtrl.parent.select(0);
  }

  buscar_productos(ev:any){
    let valor = ev.target.value;
    console.log(valor);

    //this.ps.buscar_producto( valor );
  }

}
