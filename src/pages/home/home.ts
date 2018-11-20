import { FavoritosProvider } from './../../providers/favoritos/favoritos';
import { CategoriesPage } from './../categories/categories';
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
  categoriePage = CategoriesPage;
  images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
  categorias =['Museos','Iglesias','Restaurantes','Discotecas y bares','Centros comerciales','Bancos','Destinos Turisticos'];
  places:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public _ps: PlacesProvider, private _us:UsuarioProvider, private fP: FavoritosProvider) {
                this.places = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
    this.getPlaces();
    //console.log(_ps.lugares[0]);
  }

  openPage() {
    this.navCtrl.push(PlaceprofilePage)
  }

  siguiente_pagina(infiniteScroll){
    this._ps.cargar_todos2()
          .then( ()=>{

            infiniteScroll.complete();

          })
  }


  getPlaces(){
    this._ps.getPlaces().subscribe(
      result => {
        this.places = result.lugares;
        console.log(result);
      }
    )
  }

  getPlaceId(){

  }

}
