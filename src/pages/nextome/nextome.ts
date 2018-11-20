import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlaceprofilePage, HomePage } from "../index.pages";
/**
 * Generated class for the Location2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare var google;

@IonicPage()
@Component({
  selector: 'page-nextome',
  templateUrl: 'nextome.html',
})
export class NextomePage {

  map: any;
  lat: number;
  long: number;
  arreglo: any[] = [];
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any;
  waypoints: any[];
  latitude: any;
  longitude: any;
  profilePage: PlaceprofilePage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ps: PlacesProvider,
    private geolocation: Geolocation) {

    /* this.lat = -16.424019;
     this.long = -71.556181;*/

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.bounds = new google.maps.LatLngBounds();
    /*this.waypoints = [
      {
        location: { lat: -16.395129, lng: -71.536791 },
        stopover: true,
      }
    ];*/

    console.log("Arreglo de lugares");
    this.arreglo = ps.lugares;
    this.arreglo.forEach(element => {
      console.log(element.lugar);
    });

    
    //console.log(this.arreglo);

  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Location2Page');
    this.getPosition();
  }

  centerMap() {
    let latLng = new google.maps.LatLng(-16.424009, -71.556213);
    this.map.setCenter(latLng);
  }

  getPosition(): any {
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
      //this.centerMap(response);
    })
      .catch(error => {
        console.log(error);
      })
  }

  loadMap(position: Geoposition) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = { lat: latitude, lng: longitude };

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
      ],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    });
    var icon = {
      url: "https://image0.flaticon.com/icons/png/128/249/249699.png", // url
      scaledSize: new google.maps.Size(40, 40), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        icon: '../../assets/icon/ubi2.png'
      });
      // 
      this.arreglo.forEach(element => {
        let posicionLugar = { lat: parseFloat(element.latitud), lng: parseFloat(element.longitud) };
        console.log("Latitud y Longitud");
        console.log(posicionLugar);
        console.log("Lugar");
        console.log(element.categoria.nombre);
        if (element.categoria.nombre == "Destinos Turisticos") {
          console.log("DTTTT");
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://res.cloudinary.com/dip46a6en/image/upload/v1535680225/Aplicacion/Lugares/Iconos/camera.png',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });

        }
        if (element.categoria.nombre == "Iglesias") {
          console.log("ENTRO A IGLESIAS");
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://image0.flaticon.com/icons/png/128/884/884904.png',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }
        if (element.categoria.nombre == "Restaurantes") {
          console.log("Restaurantes");
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://image0.flaticon.com/icons/png/128/685/685352.png',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }
        if (element.categoria.nombre == "Discotecas y Bares") {
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://image0.flaticon.com/icons/png/128/387/387253.png',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }
        if (element.categoria.nombre == "Centros Comerciales") {
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://image.flaticon.com/user_icons/8160/8160503/1531709718.svg',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(40, 40), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }
        if (element.categoria.nombre == "Bancos") {
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://image.flaticon.com/user_icons/8160/8160503/1531429739.svg',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }
        if (element.categoria.nombre == "Supermercados") {
          let marker2 = new google.maps.Marker({
            position: posicionLugar,
            map: this.map,
            disableAutoPan: false,
            // label: { 
            //   text: element.lugar,
            //   color: "white",
            //   fontSize: "10px",
            //   labelClass: "my-custom-class-for-label"
            // },
            animation: google.maps.Animation.DROP,
            title: element.nombre,
            icon: {
              url: 'https://res.cloudinary.com/aparedesa/image/upload/v1531324639/samples/iconos/supermercados.png',
              labelOrigin: new google.maps.Point(10, 20),
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
            },
          });
          var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
            '<div id="bodyContent">' +
            '<p><b>' + element.nombre + '</b>,' + '<br>' + element.categoria.nombre + '</p>' +
            '</div>' +
            '<button ion-button id="myid">Ver mas</button>' +
            '</div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click', function () {
            infowindow.open(this.map, marker2);
          });
          google.maps.event.addListenerOnce(infowindow, 'domready', () => {
            document.getElementById('myid').addEventListener('click', () => {
              this.navCtrl.push(PlaceprofilePage, { producto: element });
            });
          });
        }

      });

      var iconBase = '../../assets/icon/';
      var icons = {
        parking: {
          name: 'Ubicacion',
          icon: iconBase+'ubicacion.png'
        },
        library: {
          name: 'D. Turistico',
          icon: iconBase+'camera2.png'
        },
        info: {
          name: 'C. Comercial',
          icon: iconBase+'mall.png'
        }
      };

      var legend = document.getElementById('legend');
      for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
      }

      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(legend);

      mapEle.classList.add('show-map');
    });
  }




}
