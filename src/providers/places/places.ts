import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PlacesProvider {

  pagina : number =0;
  lugares:any[] = [];

  lineas:any[] = [];
  por_categoria:any[] = [];
  por_categoria2:any[] = [];
  resultados:any[] = [];
  latitud:any[]=[];
  longitud:any[]=[];

  public url = "https://turisteape.herokuapp.com/api/";

  constructor(public http: HttpClient) {
    console.log('Inicializacion de proveedor de lugares!');
    this.cargar_todos2();
    this.cargar_categorias();
   

    console.log("Lugares");
    console.log(this.lugares);
  
    console.log("Categorias");
    console.log(this.lineas);

  }

  cargar_categorias(){
    let url = "http://206.189.18.208:3977/api/turistea_pe/categoria";
    this.http.get( url )
            .subscribe( data =>{
              //this.lineas = data.lineas;
              this.lineas.push(data.categorias);
              //console.log(this.lineas);
            })
  }

  cargar_por_cate(cat:any){
    let url = "http://206.189.18.208:3977/api/turistea_pe/lugar/categoria/"+ cat;
    this.http.get( url )
              .subscribe( data =>{

                //console.log(data.lugares);
                this.por_categoria2 = data.lugares;
                console.log(this.por_categoria2);
              });
  }

  cargar_todos2 () {

    let promesa = new Promise((resolve, reject)=>{
      let url = "http://206.189.18.208:3977/api/turistea_pe/lugar";

      this.http.get(url)
          .subscribe( data =>{
            //console.log(data);

              this.lugares.push(data.lugares);
              this.pagina+=1;
            resolve();
          })
    });

    return promesa;
  }

  // buscar_producto( termino:string ){

  //   let url = URL_SERVICIOS + "/lugares/buscar/" + termino;

  //   this.http.get( url )
  //           .subscribe( resp =>{

  //             let data = resp;

  //             this.resultados = data.lugares;
  //             console.log(this.resultados);

  //           });

  // }

  getPlaces(){
    return this.http.get(this.url+'place/all');
  }
  getPlaceId(id:any){
    return this.http.get(this.url+'place/'+id);
  }
  getPlaceByCategory(id:any){
    return this.http.get(this.url+'place/category/'+id);
  }
  getCategories(){
    return this.http.get(this.url+'category/all');
  }

}
