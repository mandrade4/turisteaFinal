
import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, Modal } from 'ionic-angular';
import { PlaceprofilePage } from "../index.pages";


import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-howtoget',
  templateUrl: 'howtoget.html'
})

export class HowtogetPage {

  map: any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any;
  latl2: any;
  waypoints: any[];
  latitude: any;
  longitude: any;
  arreglo: any[] = [];
  arreglo2: any[] = [];


  placeProfile: PlaceprofilePage;

  constructor(private navCtrl: NavController,
    private geolocation: Geolocation,
    private ps: PlacesProvider,
    private aC: AlertController,
    private modalCtrl: ModalController) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.bounds = new google.maps.LatLngBounds();
    // this.waypoints = [
    //   {
    //     location: { lat: -16.395129, lng: -71.536791 },
    //     stopover: true,
    //   }
    // ];

    this.arreglo = ps.lugares;
    this.arreglo.forEach(element => {
      console.log(element.lugar);
    });

    console.log(this.arreglo);

  }

  centerMap() {
    let latLng = new google.maps.LatLng(-16.395129, -71.536791);
    this.map.setCenter(latLng);
  }

  muestraOculta(id) {
    if (document.getElementById(id)) {
      var el = document.getElementById(id);
      if (el.style.display == "none") {
        document.getElementById('map').style.height = '330px';
        document.getElementById('nbutton').innerHTML = 'Ocultar Info';
        el.style.display = "block";
      } else {
        el.style.display = "none";
        document.getElementById('nbutton').innerHTML = 'Mostrar Info';
        document.getElementById('map').style.height = '645px';
      }
    }
    window.onload = () => {
      this.muestraOculta('panel');
    }
  }

  showAlert() {
    const alert = this.aC.create({
      title: 'Tiempo aproximado:',
      subTitle: '57 min',
      buttons: ['OK']
    });
    alert.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

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
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    let x = position.coords.accuracy;
    console.log(this.latitude, this.longitude);
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
    let panelEle: HTMLElement = document.getElementById('panel');

    // create LatLng object
    this.myLatLng = { lat: this.latitude, lng: this.longitude };
    this.latl2 = { lat: -16.421477, lng: -71.553343 };
    this.showAlert();

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 12,
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
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false

    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(panelEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');

      this.calculateRoute();
      // let marker = new google.maps.Marker({
      //   position: this.latl2,
      //   map: this.map,
      //   icon: {
      //     url: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/700150-icon-64-compass-128.png',
      //     scaledSize: new google.maps.Size(35, 35), // scaled size
      //     origin: new google.maps.Point(0, 0), // origin
      //     anchor: new google.maps.Point(0, 0) // anchor
      //   }
      // });
      // var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
      //   '<div id="bodyContent">' +
      //   '<p><b>papu</b></p> ' +
      //   '<img class="papu" style="width:auto;height:auto;" src="../../assets/imgs/avatar.jpeg" class="thumb-img" imageViewer onclick="modal()">' +
      //   '</div>' +
      //   '</div>';
      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // });
      // marker.addListener('click', function () {
      //   infowindow.open(this.map, marker);
      // });

      // this.ubic.forEach(element => {
      //   let posicionLugar = { lat: parseFloat(element.lat), lng: parseFloat(element.lng) };
      //   //console.log(posicionLugar);
      //   let marker2 = new google.maps.Marker({
      //     position: posicionLugar,
      //     map: this.map,
      //     animation: google.maps.Animation.DROP,
      //     title: element.name,
      //     icon:  {
      //       url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678093-pin-128.png',
      //       scaledSize: new google.maps.Size(40, 40), // scaled size
      //       origin: new google.maps.Point(0,0), // origin
      //       anchor: new google.maps.Point(0, 0) // anchor
      //   },
      //   });

      //   var contentString = '<div id="content" style=" width: 150px; height:100px"> ' +
      //                         '<div id="bodyContent">' +
      //                           '<p><b>'+element.name +'</b>'+'<br>'+
      //                           '<img class="papu" style="width:auto;height:auto;" src="'+ element.img +'" class="thumb-img" imageViewer onclick="modal()">' +
      //                           '</p>' +
      //                         '</div>' +
      //                       '</div>';
      //   var infowindow = new google.maps.InfoWindow({
      //     content: contentString
      //   });
      //   marker2.addListener('click', function () {
      //     infowindow.open(this.map, marker2);
      //   });

      // });

    });
    // var centerControlDiv = document.createElement('div');
    // //var centerControl = new HomePage();

    // centerControlDiv.tabIndex = 1;
    // this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    /*  this.arreglo.forEach(element => {
        let posicionLugar = {lat: parseFloat(element.latitud), lng: parseFloat(element.longitud)};
        console.log(posicionLugar);
        let marker2 = new google.maps.Marker({
          position: posicionLugar,
          map: this.map, 
          animation: google.maps.Animation.DROP,
          title: element.lugar
          });
        console.log(element.lugar);
      });*/
  }

  private calculateRoute() {

    this.bounds.extend(this.myLatLng);

    this.arreglo.forEach(waypoint => {
      var point = new google.maps.LatLng(waypoint.latitud, waypoint.longitud);
      this.bounds.extend(point);

      console.log("Latitud y longitud y nombre");
      console.log(waypoint.latitud + waypoint.longitud + waypoint.nombre );

      this.map.fitBounds(this.bounds);
//VER ESTE ERROR SOLO REDIRIGE A MARISCAL CASTILLA
      this.directionsService.route({
        origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
        destination: new google.maps.LatLng(waypoint.latitud, waypoint.longitud),
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
        avoidTolls: true
      }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(response);
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      });
    });

    // this.map.fitBounds(this.bounds);

    // this.directionsService.route({
    //   origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
    //   destination: new google.maps.LatLng(-16.447817, -71.539399),
    //   waypoints: this.waypoints,
    //   optimizeWaypoints: true,
    //   travelMode: google.maps.TravelMode.WALKING,
    //   avoidTolls: true
    // }, (response, status) => {
    //   if (status === google.maps.DirectionsStatus.OK) {
    //     console.log(response);
    //     this.directionsDisplay.setDirections(response);
    //   } else {
    //     alert('Could not display directions due to: ' + status);
    //   }
    // });

  }


}

class Profile {

  //  constructor(params: NavParams) {
  //    console.log('UserId', params.get('userId'));
  //  }

}