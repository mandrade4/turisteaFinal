import { URL_SERVICIOS } from './../../config/url.servicios';
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

  // museos:any[]=[];
  // iglesias:any[]=[];
  // comidas:any[]=[];
  // discotecas:any[]=[];
  // centros:any[]=[];
  // bancos:any[]=[];
  // destinos:any[]=[];

  constructor(public http: HttpClient) {
    console.log('Inicializacion de proveedor de lugares!');
    this.cargar_todos2();
    this.cargar_categorias();
    // this.cargar_por_cate("5b414a344ed1ef4a63b9cbec");
    // console.log(this.por_categoria2);

    

    console.log("Lugares");
    console.log(this.lugares);
  
    console.log("Categorias");
    console.log(this.lineas);

  }

  

  // cargar_lineas(){

  //   let url = URL_SERVICIOS + "/categorias";
  //   this.http.get( url )
  //           .subscribe( data =>{

  //             if( data.error ){
  //               // problemas!
  //             }else{
  //               //this.lineas = data.lineas;
  //               this.lineas.push(...data.lineas);
  //               //console.log(this.lineas);
  //             }

  //           })

  // }

  cargar_categorias(){
    let url = "http://206.189.18.208:3977/api/turistea_pe/categoria";
    this.http.get( url )
            .subscribe( data =>{
              //this.lineas = data.lineas;
              this.lineas.push(...data.categorias);
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

  // cargar_por_categoria(cat:number){

  //   let url = URL_SERVICIOS + "/lugares/por_tipo/"+ cat;
    
  //   if (cat==1){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.museos.push(...data.productos);
  //               //this.onion=JSON.parse(JSON.stringify(data.productos));
  //               //console.log(this.onion);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==2){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.iglesias.push(...data.productos);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==3){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.comidas.push(...data.productos);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==4){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.discotecas.push(...data.productos);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==5){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.centros.push(...data.productos);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==6){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.bancos.push(...data.productos);
  //               //console.log(this.por_categoria);
  //             });
  //   }if (cat==7){
  //     this.http.get( url )
  //             .subscribe( data =>{

  //               // console.log(data.productos);
  //               //this.por_categoria = data.productos;
  //               this.destinos.push(...data.productos);

  //             });
  //   }

  // }

  // cargar_todos () {

  //   let promesa = new Promise((resolve, reject)=>{
  //     let url = URL_SERVICIOS+"/lugares/todos/" + this.pagina;

  //     this.http.get(url)
  //         .subscribe( data =>{
  //           //console.log(data);
  
  //           if (data.error){
  
  //           }else{
  //             this.lugares.push(...data.productos);
  //             this.pagina+=1;
  //           }
  //           resolve();
  //         })
  //   });

  //   return promesa;
  // }

  cargar_todos2 () {

    let promesa = new Promise((resolve, reject)=>{
      let url = "http://206.189.18.208:3977/api/turistea_pe/lugar";

      this.http.get(url)
          .subscribe( data =>{
            //console.log(data);

              this.lugares.push(...data.lugares);
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
}
