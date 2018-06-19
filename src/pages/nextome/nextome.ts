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
    this.waypoints = [
      {
        location: { lat: -16.395129, lng: -71.536791 },
        stopover: true,
      }
    ];

    this.arreglo = ps.lugares;
    this.arreglo.forEach(element => {
      console.log(element.lugar);
    });

    console.log(this.arreglo);

  }

  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Location2Page');
    this.getPosition();
  }

  getPosition(): any {
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
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
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
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
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
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
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
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
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
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
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        icon: 'http://icons.iconarchive.com/icons/julie-and-mark/gundam-0083/32/Cima-Gallahau-icon.png'
      });
      // 
      this.arreglo.forEach(element => {
        let posicionLugar = { lat: parseFloat(element.latitud), lng: parseFloat(element.longitud) };
        console.log(posicionLugar);
        let marker2 = new google.maps.Marker({
          position: posicionLugar,
          map: this.map,
          disableAutoPan:false,
          label: { 
            text: element.lugar,
            color: "white",
            fontSize: "10px",
            labelClass: "my-custom-class-for-label"
          },
          animation: google.maps.Animation.DROP,
          title: element.lugar,
          icon:  {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            labelOrigin: new google.maps.Point(10,20),
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        },
        });
        var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
                            '<div id="bodyContent">' +
                              '<p><b>' + element.lugar + '</b>,'+'<br>' + element.categoria + '</p>' +
                            '</div>' +
                            '<button ion-button id="myid">Ver mas</button>'+
                            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker2.addListener('click', function () {
          infowindow.open(this.map, marker2);
        });
        //console.log(element.lugar);
        google.maps.event.addListenerOnce(infowindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.navCtrl.push(PlaceprofilePage,{producto:element});
          });
        });

      });

      mapEle.classList.add('show-map');
    });
  }




}
