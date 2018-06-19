import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HowtogetPage } from "../index.pages";



@IonicPage()
@Component({
  selector: 'page-placeprofile',
  templateUrl: 'placeprofile.html',
})
export class PlaceprofilePage {

  producto:any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
      console.log(this.navParams.get("Producto"));
      this.producto = this.navParams.get("producto");
      //this.navCtrl.push()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  comoLlegar(){
    this.navCtrl.push(HowtogetPage);
  }

}
