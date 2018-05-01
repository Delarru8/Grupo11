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
