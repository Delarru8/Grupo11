import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Pedido} from '../../models/pedido.model';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LibroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libro',
  templateUrl: 'libro.html',
})
export class LibroPage {
	public lib:any;
	public newuser:any;
	public dis:boolean = false;
	public bibliovalue: String;
	public unLibro: any;
	public unUser: any;
	public param: any;
	public fecha: any = "";
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dbFirebase:SiersProvider) {
	  this.lib = navParams.get("unLibro");
	  this.newuser = navParams.get("unUser");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibroPage');
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
  
  disponible(){
	  if(this.bibliovalue == "leg" || this.bibliovalue == "gl" || this.bibliovalue == "alc"){
		  this.dis = false;
	  }else{
		  this.dis = true;
	  }
	  return this.dis;
  }
  
  showAlert() {
	  if(this.newuser.tipo=="bl"){
		  let alert = this.alertCtrl.create({
		  title: 'Zona Restringida',
		  subTitle: 'Lo sentimos, pero esta funcionalidad de la aplicación no se encuentra disponible para los bibliotecarios.',
		  buttons: ['OK']
		  });
		  alert.present();
	  }else{
		  if(this.dis == false){
				this.param = {
					unUser: this.newuser
				};
				this.navCtrl.setRoot(HomePage,this.param);
				let alert = this.alertCtrl.create({
				title: 'En espera',
				subTitle: 'Te has puesto en la lista de espera. Se te avisará cuando este disponible',
				buttons: ['OK']
				});
				alert.present();
			}
			
		  else{
			if(this.fecha != ""){
				
				let datoslibro5:Pedido=new Pedido();
				datoslibro5.titulo=this.lib.titulo;
				datoslibro5.nombre=this.newuser.nombre;
				datoslibro5.dni=this.newuser.dni;
				datoslibro5.fecha=this.fecha;
				datoslibro5.imagen=this.lib.imagen;
				datoslibro5.preparado="no";
				this.dbFirebase.guardarPedido(datoslibro5);
		
				this.param = {
					unUser: this.newuser
				};
				this.navCtrl.setRoot(HomePage,this.param);
				let alert = this.alertCtrl.create({
				title: 'Reservado',
				subTitle: 'Puede recoger el libro en la fecha indicada: '+this.fecha,
				buttons: ['OK']
				});
				alert.present();
				
			}
				
			else{
				let alert = this.alertCtrl.create({
				title: 'Especifica una fecha',
				subTitle: 'No se ha introducido una fecha valida',
				buttons: ['OK']
				});
				alert.present();
			}
		  }
	  }
  }

}
