import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';
import {Usuario} from '../../models/usuario.model';
import {Pedido} from '../../models/pedido.model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
	public listaLibros:any[];
	public newuser:any;
	public unLibro: any;
	public unUser: any;
	public param: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:SiersProvider) {
	  this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros});
	  this.newuser = navParams.get("unUser");
	  alert(this.newuser.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  openPage(pagina)
  {
	this.param = {
		unUser: this.newuser
	};
	this.navCtrl.push(pagina,this.param);
  }
  
  irHome()
  {
	  this.param = {
		unUser: this.newuser
		};
	  this.navCtrl.setRoot(HomePage,this.param);
  }
  
}
