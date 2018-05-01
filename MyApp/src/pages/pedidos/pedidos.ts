import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
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
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dbFirebase:SiersProvider) {
	  this.dbFirebase.getPedidos().subscribe(listaPedidos=>{this.listaPedidos=listaPedidos});
	  this.newuser = navParams.get("unUser");
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
  
  preparado(pedido:Pedido){
	  let datoslibro5:Pedido=new Pedido();
	  datoslibro5.titulo=pedido.titulo;
	  datoslibro5.nombre=pedido.nombre;
	  datoslibro5.dni=pedido.dni;
	  datoslibro5.fecha=pedido.fecha;
	  datoslibro5.imagen=pedido.imagen;
	  datoslibro5.preparado="si";
	  this.dbFirebase.delPedido(pedido.titulo);
	  this.dbFirebase.guardarPedido(datoslibro5);
  }
  
  recogido(pedido:Pedido){
	  if(pedido.preparado=="si"){
		  this.dbFirebase.delPedido(pedido.titulo);
	  }else{
		  let alert = this.alertCtrl.create({
		  title: 'Error',
		  subTitle: 'No se puede recoger un libro que no haya sido preparado con anterioridad.',
		  buttons: ['OK']
		  });
		  alert.present();
	  }
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
