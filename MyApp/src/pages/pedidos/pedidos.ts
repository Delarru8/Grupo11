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
	public listaPedidos:any[];
	public newuser:any;
	public unLibro: any;
	public unUser: any;
	public param: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:SiersProvider) {
	  this.dbFirebase.getPedidos().subscribe(listaPedidos=>{this.listaPedidos=listaPedidos});
	  this.newuser = navParams.get("unUser");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  prep(){
	  return true;
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
