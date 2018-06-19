import { URL_SERVICIOS } from './../../config/url.servicios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PlacesProvider {

  pagina : number =0;
  lugares:any[] = [];
  lineas:any[] = [];
  por_categoria:any[] = [];
  resultados:any[] = [];
  latitud:any[]=[];
  longitud:any[]=[];

  constructor(public http: HttpClient) {
    console.log('Hello PlacesProvider Pro vider');
    this.cargar_todos();
    this.cargar_lineas();
  }

  cargar_lineas(){

    let url = URL_SERVICIOS + "/categorias";
    this.http.get( url )
            .subscribe( data =>{

              if( data.error ){
                // problemas!
              }else{
                this.lineas = data.lineas;
                console.log(this.lineas);
              }

            })

  }

  cargar_por_categoria( categoria:number ){

    let url = URL_SERVICIOS + "/lugares/por_tipo/"+ categoria;

    this.http.get( url )
              .subscribe( data =>{

                console.log(data.productos);
                this.por_categoria = data.productos;

              });

  }

  cargar_todos () {

    let promesa = new Promise((resolve, reject)=>{
      let url = URL_SERVICIOS+"/lugares/todos/" + this.pagina;

      this.http.get(url)
          .subscribe( data =>{
            console.log(data);
  
            if (data.error){
  
            }else{
              this.lugares.push(...data.productos);
              this.pagina+=1;
            }
            resolve();
          })
    });

    return promesa;
  }

  buscar_producto( termino:string ){

    let url = URL_SERVICIOS + "/lugares/buscar/" + termino;

    this.http.get( url )
            .subscribe( resp =>{

              let data = resp;

              this.resultados = data.lugares;
              console.log(this.resultados);

            });

  }
}
