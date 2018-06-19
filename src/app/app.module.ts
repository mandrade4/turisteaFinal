import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlacesProvider } from '../providers/places/places';
import { UsuarioProvider } from './../providers/usuario/usuario';

import { HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicStorageModule } from "@ionic/storage";

/*
* NATIVE LIBRARIES
*
*/
import { Geolocation } from "@ionic-native/geolocation";

import {  CategoriesPage,
          HomePage,
          ForgotpasswordPage,
          HowtogetPage,
          IntroductionPage,
          LoginPage,
          NextomePage,
          PlaceprofilePage,
          RegisterPage,
          SearchplacePage,
          TabsPage,
          PercategoriesPage  
        } from "../pages/index.pages";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForgotpasswordPage,
    ListPage,
    CategoriesPage,
    HowtogetPage,
    IntroductionPage,
    LoginPage,
    NextomePage,
    PlaceprofilePage,
    RegisterPage,
    SearchplacePage,
    TabsPage,
    PercategoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    ForgotpasswordPage,
    HowtogetPage,
    IntroductionPage,
    LoginPage,
    NextomePage,
    PlaceprofilePage,
    RegisterPage,
    SearchplacePage,
    TabsPage,
    PercategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesProvider,
    HttpModule,
    HttpClient,
    Geolocation,
    UsuarioProvider,
    Storage
  ]
})
export class AppModule {}
