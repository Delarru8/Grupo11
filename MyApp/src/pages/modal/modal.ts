import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {SiersProvider} from '../../providers/siers/siers';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
public listaUsuarios:any[];
	user : string;
	pass : string;
	public newuser:any;
	public param: any;
	public unUser: any;


public constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl : ViewController,public dbFirebase:SiersProvider) {
		let alert1 = this.alertCtrl.create({
		title: 'Usuario predeterminado 2',
		subTitle: 'Nombre: Juan, Contraseña: 123',
		buttons: ['OK']
		});
		alert1.present();
		let alert2 = this.alertCtrl.create({
		title: 'Usuario predeterminado 1',
		subTitle: 'Nombre: Jose, Contraseña: 789',
		buttons: ['OK']
		});
		alert2.present();
		let alert3 = this.alertCtrl.create({
		title: 'Bibliotecario predeterminado',
		subTitle: 'Nombre: Yolanda, Contraseña: 456',
		buttons: ['OK']
		});
		alert3.present();
  }

	ionViewDidEnter()
	{
		this.dbFirebase.getUsuario().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
	}

  irHome(){
	  this.newuser="";
            for(var i in this.listaUsuarios){
				if(this.listaUsuarios[i].nombre==this.user && this.listaUsuarios[i].contraseña==this.pass){
                this.newuser=this.listaUsuarios[i];
            }
				
        }
	 if(this.newuser!=""){
	   this.param = {
		unUser: this.newuser
		};
	  this.navCtrl.setRoot(HomePage,this.param);
	  }else{
		  this.user="";
		  this.pass="";
		 let alert = this.alertCtrl.create({
			title: 'Usuario incorrecto',
			subTitle: 'Vuelva a introducir usuario y contraseña',
			buttons: ['OK']
			});
			alert.present();
	  }
  }
  
}
