import { UsuarioProvider } from './../../providers/usuario/usuario';
import { PlacesProvider } from './../../providers/places/places';
import { PlaceprofilePage} from "../index.pages";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from "ionic-angular";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profilePage = PlaceprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private _ps: PlacesProvider, private _us:UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  openPage() {
    this.navCtrl.push(PlaceprofilePage)
  }

  siguiente_pagina(infiniteScroll){
    this._ps.cargar_todos()
          .then( ()=>{

            infiniteScroll.complete();

          })
  }

}
