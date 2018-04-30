import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
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
	
	public libros:String[];
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
  
	vaciar() {
		this.buscado = "";
	}

	public listaLibros: Libro[];
	
	ionViewDidEnter()
	{
		this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;});
	}
	
	buscar() {
		var _libros: String[] = new Array(this.listaLibros.length);
		var libro: Libro;
		for(libro in this.listaLibros){
			_libros[libro] = this.listaLibros[libro].titulo;
		}
		if (this.buscado != '') {
			this.libros = _libros.filter((libro) => {
				return (libro.toLowerCase().indexOf(this.buscado.toLowerCase()) > -1);
			});
		}
	}
  
}
