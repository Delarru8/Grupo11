import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Pedido} from '../../models/pedido.model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EsperaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espera',
  templateUrl: 'espera.html',
})
export class EsperaPage {
	public listaPedidos:any[];
	public libros:any[];
	public librosBuenos:String[];
	public newuser:any;
	public unLibro: any;
	public unUser: any;
	public param: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dbFirebase:SiersProvider) {
	  this.newuser = navParams.get("unUser");
	  this.dbFirebase.getPedidos().subscribe(listaPedidos=>{this.listaPedidos=listaPedidos;
		var _libros: String[] = new Array(this.listaPedidos.length);
        for(var libro in this.listaPedidos){
            _libros[libro] = this.listaPedidos[libro].nombre;
        }
		this.librosBuenos = _libros.filter((libro) => {
                return (libro.toLowerCase().indexOf(this.newuser.nombre.toLowerCase()) > -1);
        });
		this.libros = new Array(this.librosBuenos.length);
		var k: any;
		var j: number = 0;
		for(k in this.listaPedidos){
			if(this.listaPedidos[k].nombre == this.newuser.nombre){
				this.libros[j]=this.listaPedidos[k];
				j = j+1;
				alert(this.libros[j].titulo);
			}
		}
	  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  prep(pedido:Pedido){
	  if(pedido.preparado == "no"){
		  return false;
	  }
	  return true;
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
  
  irHome()
  {
	  this.param = {
		unUser: this.newuser
		};
	  this.navCtrl.setRoot(HomePage,this.param);
  }
  
}
