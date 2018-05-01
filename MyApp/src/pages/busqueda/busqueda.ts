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
	public vacio:String[];
	public par:any;
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
  
	
	public listaLibros: Libro[];
	public librosParecidos: Libro[];
	public vacio2: Libro[];
  
	vaciar() {
		this.buscado = "";
		this.libros = this.vacio;
		this.librosParecidos = this.vacio2;
	}
	
	ionViewDidEnter()
	{
		this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;});
	}
	
	buscar() {
<<<<<<< HEAD
		var _libros: String[] = new Array(this.listaLibros.length);
		for(var libro in this.listaLibros){
			_libros[libro] = this.listaLibros[libro].titulo;
		}
		if (this.buscado != '') {
			this.libros = _libros.filter((libro) => {
				return (libro.toLowerCase().indexOf(this.buscado.toLowerCase()) > -1);
			});
			var par: any[] = new Array(this.libros.length);
			for(var j in this.libros){
				for(var k in _libros){
					if(this.libros[j] == _libros[k]){
						par[j] = k;
					}
				}
			}
			this.librosParecidos = new Array(this.libros.length);
			for(var i in this.libros){
				this.librosParecidos[i] = this.listaLibros[par[i]];
			}
		}
		else{
			this.libros = this.vacio;
			this.librosParecidos = this.vacio2;
		}
	}
=======
        var _libros: String[] = new Array(this.listaLibros.length);
        for(var libro in this.listaLibros){
            _libros[libro] = this.listaLibros[libro].titulo;
        }
        if (this.buscado != '') {
            this.libros = _libros.filter((libro) => {
                return (libro.toLowerCase().indexOf(this.buscado.toLowerCase()) > -1);
            });
            this.par = new Array(this.libros.length);
            for(var j in this.libros){
                for(var k in _libros){
                    if(this.libros[j] == _libros[k]){
                        this.par[j] = k;
                    }
                }
            }
            this.librosParecidos = new Array(this.libros.length);
            for(var i in this.libros){
                this.librosParecidos[i] = this.listaLibros[this.par[i]];
            }
        }
        else{
            this.libros = this.vacio;
            this.librosParecidos = this.vacio2;
        }
    }
>>>>>>> da7ead5695bde24c1bc30a8681f80c0dc428bef3
  
}
