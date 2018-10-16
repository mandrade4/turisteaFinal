import { PlacesProvider } from './../../providers/places/places';
import { FavoritosProvider } from './../../providers/favoritos/favoritos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HowtogetPage } from "../index.pages";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-placeprofile',
  templateUrl: 'placeprofile.html',
})
export class PlaceprofilePage {

  producto:any ={};
  images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
  mySlideOptions = {
    pager:true
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private tC: ToastController, private fP:FavoritosProvider,
              private _ps:PlacesProvider) {
  
      console.log("Perfil de Lugar");
      console.log(this.navParams.get("Producto"));
      this.producto = this.navParams.get("producto");
      console.log(this.producto.nombre);
      console.log(this.producto.descripcion);
      console.log(this.producto.telefono);
      console.log(this.producto.website);
      console.log(this.producto.direccion);
      //this.navCtrl.push()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  comoLlegar(){
    this.navCtrl.push(HowtogetPage);
  }
  
  color(){
    document.getElementById("papu").style.color = "danger";
  }

  presentToast() {
    const toast = this.tC.create({
      message: 'Anadido a tus favoritos!',
      duration: 4000
    });
    toast.present();
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
