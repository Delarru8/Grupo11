import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';
import { AlertController } from 'ionic-angular';

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
	public par:any[];
	buscado : string;
	public newuser: any;
	public param: any;
	public unUser: any;
	public unLibro: any;
	
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,public dbFirebase:SiersProvider) {
	  this.newuser = navParams.get("unUser");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  perfil(){
	  let alert = this.alertCtrl.create({
	  title: 'Zona Restringida',
	  subTitle: 'Lo sentimos, pero esta funcionalidad de la aplicación no se encuentra disponible en esta versión.',
	  buttons: ['OK']
	  });
	  alert.present();
  }
  
  openPage(pagina){
	this.param = {
			unUser: this.newuser
	};
	this.navCtrl.push(pagina,this.param);
  }
  
  openListas(){
	  if(this.newuser.tipo=="bl"){
			this.param = {
				unUser: this.newuser
			};
			this.navCtrl.push("PedidosPage",this.param);
		}else{
			this.param = {
				unUser: this.newuser
			};
			this.navCtrl.push("EsperaPage",this.param);
	  }
  }
  
  
  goToLibro(libroDado) {
	this.param = {
		unLibro: libroDado,
		unUser: this.newuser
	};
	this.navCtrl.push('LibroPage',this.param);
  }
  
  irHome()
  {
	  this.param = {
		unUser: this.newuser
		};
	  this.navCtrl.setRoot(HomePage,this.param);
  }
  
	
	public listaLibros: Libro[];
	public librosParecidos: Libro[];
	public vacio2: Libro[];
	public _libros: String[];
  
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
  
}
