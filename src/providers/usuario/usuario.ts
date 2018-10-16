import { AlertController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/url.servicios';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';



@Injectable()
export class UsuarioProvider {

  token:string;
  id_usuario:string;

  constructor(public http: HttpClient, private alertCtrl: AlertController, private platform: Platform, private storage:Storage) {
    console.log('Hello UsuarioProvider Provider');
    //this.cargar_storage();
  }

  // activo():boolean{
  //   if (this.token){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  // ingresar ( correo:string, contrasena:string) {

  //  /* let data = new URLSearchParams();
  //   data.append("correo", correo);
  //   data.append("contrasena", contrasena);*/

  //   let url = URL_SERVICIOS+"/login";

  //   return this.http.post( url, {correo,contrasena})
  //                   .map( resp=>{

  //                     let data_resp =resp;
  //                     console.log("asdasdas");
  //                     console.log(resp);

  //                     if (data_resp.error) {
  //                       //console.log("papapappa");
  //                       this.alertCtrl.create({
  //                         title:"Error al iniciar sesion",
  //                         subTitle: data_resp.mensaje,
  //                         buttons: ["Ok"]
  //                       }).present();
  //                     }else{
  //                       this.token = data_resp.token;
  //                       this.id_usuario = data_resp.id_usuario;
  //                     }

  //                     //Guardando en Storage
  //                     this.guardar_storage();
  //                   })
  // }

  // cerrar_sesion(){
  //   this.token=null;
  //   this.id_usuario=null;

  //   this.guardar_storage();
  // }

  // private guardar_storage(){

  //   if( this.platform.is("cordova") ){
  //     // dispositivo
  //     this.storage.set('token', this.token );
  //     this.storage.set('id_usuario', this.id_usuario );

  //   }else{
  //     // computadora
  //     if (this.token) {
  //       localStorage.setItem("token", this.token );
  //       localStorage.setItem("id_usuario", this.id_usuario );
  //     }else {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("id_usuario");
  //     }
      
  //   }
  // }

  // cargar_storage(){

  //   let promesa = new Promise( ( resolve, reject )=>{

  //     if( this.platform.is("cordova") ){
  //       // dispositivo
  //       this.storage.ready()
  //                 .then( ()=>{

  //                 this.storage.get("token")
  //                         .then( token =>{
  //                           if( token ){
  //                             this.token = token;
  //                           }
  //                           resolve();
  //                       })
  //                 this.storage.get("id_usuario")
  //                         .then( id_usuario =>{
  //                           if( id_usuario ){
  //                             this.id_usuario = id_usuario;
  //                           }
  //                           resolve();
  //                       })
  //             })


  //     }else{
  //       // computadora
  //       if( localStorage.getItem("token") ){
  //         //Existe items en el localstorage
  //         this.token = localStorage.getItem("token");
  //         this.token = localStorage.getItem("id_usuario");
  //       }

  //       resolve();

  //     }

  //   });

  //   return promesa;

  // }

}
