import { PlacesProvider } from './../../providers/places/places';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  waypoints: any[];
  latitude:any;
  longitude:any;
  arreglo:any[] = [];
  arreglo2:any[] = [];

  placeProfile: PlaceprofilePage;
  
  constructor(  private navCtrl: NavController,
                private geolocation: Geolocation,
                private ps: PlacesProvider) {
        
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.bounds = new google.maps.LatLngBounds();
        this.waypoints = [
          {
            location: { lat: -16.395129, lng: -71.536791 },
            stopover: true,
          }
        ];

        this.arreglo=ps.lugares;
        this.arreglo.forEach(element => {
          console.log(element.lugar);
        });

        console.log(this.arreglo);
  }
  

  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad(){
    
    this.getPosition();
  }
   
  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  
  loadMap(position: Geoposition){
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    let x = position.coords.accuracy; 
    console.log(this.latitude, this.longitude);
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
    let panelEle: HTMLElement = document.getElementById('panel');
  
    // create LatLng object
    this.myLatLng = {lat: this.latitude, lng: this.longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 12,
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
  
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(panelEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      
      this.calculateRoute();
      let marker = new google.maps.Marker({
        position: this.myLatLng,
        map: this.map
        //label: 'A'
        //icon: 'http://icons.iconarchive.com/icons/julie-and-mark/gundam-0083/32/Cima-Gallahau-icon.png'
      });

      this.arreglo.forEach(element => {
        let posicionLugar = { lat: parseFloat(element.latitud), lng: parseFloat(element.longitud) };
        console.log(posicionLugar);
        let marker2 = new google.maps.Marker({
          position: posicionLugar,
          map: this.map,
          animation: google.maps.Animation.DROP,
          title: element.lugar,
          icon:  {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        },
        });
        var contentString = '<div id="content" style=" width: 100px; height:80px"> ' +
                            '<div id="bodyContent">' +
                              '<p><b>' + element.lugar + '</b>,'+'<br>' + element.categoria + '</p>' +
                            '</div>' +
                            '<button ion-button [navParams]="'+{producto : element}+'" [navPush]="'+this.placeProfile+'">Ver mas</button>'+
                            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker2.addListener('click', function () {
          infowindow.open(this.map, marker2);
        });
        console.log(element.lugar);

      });
      
    });
    
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
  
  private calculateRoute(){
    
    this.bounds.extend(this.myLatLng);
  
    this.waypoints.forEach(waypoint => {
      var point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
      this.bounds.extend(point);
    });
  
    this.map.fitBounds(this.bounds);
  
    this.directionsService.route({
      origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      destination: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
      waypoints: this.waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
      avoidTolls: true
    }, (response, status)=> {
      if(status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Could not display directions due to: ' + status);
      }
    });  
  
  }


}
