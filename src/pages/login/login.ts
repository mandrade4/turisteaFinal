import { TabsPage } from './../tabs/tabs';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage, RegisterPage } from '../index.pages';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData: any;
  //user = {} as User;
  homePage:HomePage;

  correo:string = "";
  contrasena:string = "";

  constructor( 
              public navCtrl: NavController, 
              public navParams: NavParams,
              public aController: AlertController,
              private vc: ViewController,
              private _us:UsuarioProvider) {

              //this.vc.dismiss();
  }

  regresar(){
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goBack(){
    this.vc.dismiss(false);
  }

  ingresar () {

    this._us.ingresar(this.correo,this.contrasena)
            .subscribe(()=>{

              if (this._us.activo()){
                this.navCtrl.setRoot(TabsPage);
              } 
              
            })

  }


  // //Navegacion a pagina "Principal"
  // async navigatePrincipalPage(user: User){
  //   try {
  //     const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);  
  //     if ( result ) {
  //       this.navCtrl.setRoot( TabsPage );
  //       console.log("Bienvenido! "+user.email);
  //     } else {
  //       console.log("Usuario y/o contrasena incorrectos");
  //       this.showAlert();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     this.showAlert();
  //   }
  // }

  showAlert(){
    let alert = this.aController.create({
        title:"Usuario y/o contrasena incorrectos", 
        buttons: ['Ok']
    });
    alert.present();
  }
    

  // //Navegacion a pagina "Forget Password"
  // navigateForgetPassword() {

  //   this.navCtrl.push( ForgetpasswordPage );

  // }

  //Navegacion a pagina "Register"
  navigateRegister() {
    
        this.navCtrl.push( RegisterPage );
    
  }
}
 /* loginWithFacebook(){

    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
    //this.navCtrl.push(PrincipalPage);

  }

  loginWithGoogle() {
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.log(err+" se usa en android studio"));    
    }
  }*/
