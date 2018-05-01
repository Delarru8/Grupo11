import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';

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
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:SiersProvider) {
	  this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  openPage(pagina){
	  this.navCtrl.push(pagina);
  }
  
  irHome(){
	  this.navCtrl.setRoot(HomePage);
  }
  
}
