import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {SiersProvider} from '../../providers/siers/siers';
import {Usuario} from '../../models/usuario.model';

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
	name : string;
	pass : string;
	public newuser:any;


public constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public dbFirebase:SiersProvider) {
  }

	ionViewDidEnter()
	{
		this.dbFirebase.getUsuario().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
	}

  closeModal(){
	  this.newuser="";
            for(var i in this.listaUsuarios){
				if(this.listaUsuarios[i].nombre==this.user && this.listaUsuarios[i].contraseña==this.pass){
                this.newuser=this.listaUsuarios[i];
				alert("hey");
            }
				
        }
	  
	  if(this.newuser!=""){
	   this.viewCtrl.dismiss();
	  }else{
		 alert("Usuario incorecto");
	  }
  }
  
}
