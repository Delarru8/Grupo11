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
public listaLibros:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

	ionViewDidEnter()
	{
		this.dbFirebase.getUsuario().subscribe(listaUsuarios=>{this.listaUsuarios=listaUsuarios;});
	}

  closeModal(){
            this.librosParecidos = new Array(this.libros.length);
            for(var i in this.libros){
                this.librosParecidos[i] = this.listaLibros[this.par[i]];
            }
        }
	  
	  
	   this.viewCtrl.dismiss();
  }
  
}
