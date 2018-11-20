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
  }



}
