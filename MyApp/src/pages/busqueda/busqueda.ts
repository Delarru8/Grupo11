import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
	
	public _items:String[]=['aaa','bolsa de plastico','bidrio mal escrito','balla kk de trabajo','ccxc'];
	public libros:Libro[];
	buscado : string;
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:SiersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  openPage(pagina)
  {
	  this.navCtrl.push(pagina);
  }
  
  irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }
  
  //prueba
	
	vaciar() {
		this.buscado = "";
	}

	listaLibros:any;
	
	ionViewDidEnter()
	{
		this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;});
	}
	
	buscar() {
		if (this.buscado && this.buscado != '') {
			this.libros = this.listaLibros.filter((libro) => {
				return (libro.titulo.toLowerCase().indexOf(this.buscado.toLowerCase()) > -1);
			});
		}
	}
	
	/*
  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.dbFirebase.getLibros().filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  */
	
  //fin prueba
  
}
