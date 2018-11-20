import { FavoritosPage } from './../../pages/favoritos/favoritos';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController, Platform, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from '../../../node_modules/@angular/compiler/src/util';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  items: any[] = [];

  constructor(public http: HttpClient, private alertCtrl: AlertController, 
    private tC: ToastController, private platform: Platform, private modalCtrl:ModalController) {
    console.log('Hello FavoritosProvider Provider');
    this.cargar_storage();
    console.log(this.items);
  }

  agregar_favorito(item_parametro: any) {

    for (let item of this.items) {
      if (item.codigo == item_parametro.codigo) {
        this.alertCtrl.create({
          title: "Ya esta en tus favoritos!",
          buttons: ["Ok"]
        }).present();
      }
    }
    const toast = this.tC.create({
      message: 'Anadido a tus favoritos!',
      duration: 4000
    });
    toast.present();
    this.items.push(item_parametro);
    // this.guardar_storage();
  }

  // guardar_storage() {
  //   if (this.platform.is("cordova")) {
  //     this.storage.set('items', this.items);
  //   } else {
  //     //localStorage.set("item",JSON.stringify(this.items));
  //     localStorage.item = this.items;
  //   }
  // }

  cargar_storage() {

    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {

      } else {
        if (localStorage.items) {//localStorage.set("item",JSON.stringify(this.items));
          this.items = JSON.parse(localStorage.items);
        }

        resolve();
      }
    });

    return promesa;
  }

  ver_carrito() {

    let modal: any;

    //mostrar pagina del carrito
    modal = this.modalCtrl.create(FavoritosPage);
    modal.present();
    modal.onDidDismiss((abrirCarrito: boolean) => {

      console.log(abrirCarrito);

      if (abrirCarrito) {
        this.modalCtrl.create(FavoritosPage).present();
      }

    })

  }


}
