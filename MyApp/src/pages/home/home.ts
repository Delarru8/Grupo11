
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';
import { AlertController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
	public listaLibros:any[];
	public lib1: Libro[];
	public lib2: Libro[];
	public lib3: Libro[];
	public param: any;
	public unLibro: any;
	public unUser: any;
	public newuser: any;
		
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,public dbFirebase:SiersProvider) {
		this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;
		this.lib1 = new Array(3);
		this.lib2 = new Array(3);
		this.lib3 = new Array(3);
		var k: any;
		for(k in this.listaLibros){
			if(k<3){
				this.lib1[k]=listaLibros[k];
			}else if(k>=3 && k<6){
				this.lib2[k-3]=listaLibros[k];
			}else if(k>=6 && k<9){
				this.lib3[k-6]=listaLibros[k];
			}
		}
		});
		this.newuser = navParams.get("unUser");
	}
	
	@ViewChild(Slides) slides: Slides;
 
	
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
	

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
  }
  
  perfil(){
	  let alert = this.alertCtrl.create({
	  title: 'Zona Restringida',
	  subTitle: 'Lo sentimos, pero esta funcionalidad de la aplicación no se encuentra disponible en esta versión.',
	  buttons: ['OK']
	  });
	  alert.present();
  }
  cerrarSesion(){
	  let alert = this.alertCtrl.create({
	  title: 'Cerrar sesión',
	  subTitle: 'Usted va a cerrar su sesión actual. ¿Continuar?',
	  buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
      },
      {
        text: 'OK',
        handler: () => {
          	this.navCtrl.setRoot(ModalPage);
        }
      }
    ]
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
  
  //AÑADIR LIBROS A FIREBASE
  
  addLibro(){
	let datoslibro5:Libro=new Libro();
	datoslibro5.titulo="Harry Potter";
	datoslibro5.autor="J. K. Rowling";
	datoslibro5.sinopsis="";
	datoslibro5.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/libro.jpg?alt=media&token=e42170a1-ae3c-4d28-aa3e-87cddb521177";
	this.dbFirebase.guardarLibro(datoslibro5).then(res=>{alert(datoslibro5.titulo+ " guardado en FB");});
	let datoslibro:Libro=new Libro();
	datoslibro.titulo="El Señor de los Anillos";
	datoslibro.autor=" J.R.R. Tolkien";
	datoslibro.sinopsis="";
	datoslibro.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9788445076118.jpg?alt=media&token=03615e82-ecf1-4af8-8227-8c54fe741fe4";
	this.dbFirebase.guardarLibro(datoslibro).then(res=>{alert(datoslibro.titulo+ " guardado en FB");});
	let datoslibro2:Libro=new Libro();
	datoslibro2.titulo="Los Juegos Del Hambre";
	datoslibro2.autor="Suzanne Collins";
	datoslibro2.sinopsis="";
	datoslibro2.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9780439023481.jpg?alt=media&token=e5b74379-5005-4bdf-9eae-532b624f187e";
	this.dbFirebase.guardarLibro(datoslibro2).then(res=>{alert(datoslibro2.titulo+ " guardado en FB");});
	let datoslibro3:Libro=new Libro();
	datoslibro3.titulo="Diario de Greg";
	datoslibro3.autor="Jeff Kinney";
	datoslibro3.sinopsis="";
	datoslibro3.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9788498672220.jpg?alt=media&token=4419cecd-21a2-4b69-82e1-8c20b7de12cc";
	this.dbFirebase.guardarLibro(datoslibro3).then(res=>{alert(datoslibro3.titulo+ " guardado en FB");});
	let datoslibro4:Libro=new Libro();
	datoslibro4.titulo="Eragon";
	datoslibro4.autor="Stefen Fangmeier";
	datoslibro4.sinopsis="";
	datoslibro4.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9788496940581.jpg?alt=media&token=babc2815-1fde-4e24-b52e-0c8a23c147cc";
	this.dbFirebase.guardarLibro(datoslibro4).then(res=>{alert(datoslibro4.titulo+ " guardado en FB");});
	let datoslibro6:Libro=new Libro();
	datoslibro6.titulo="Memorias de Idhún";
	datoslibro6.autor="Laura Gallego";
	datoslibro6.sinopsis="";
	datoslibro6.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9788467502695.jpg?alt=media&token=119ac767-fe95-4f39-bde6-b3fb3e25d6b5";
	this.dbFirebase.guardarLibro(datoslibro6).then(res=>{alert(datoslibro6.titulo+ " guardado en FB");});
	let datoslibro7:Libro=new Libro();
	datoslibro7.titulo="El barco de la muerte";
	datoslibro7.autor="William Clark Russell";
	datoslibro7.sinopsis="";
	datoslibro7.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/WCRussell.jpg?alt=media&token=91cbcd43-ac4b-4cc4-9f41-776d1544089e";
	this.dbFirebase.guardarLibro(datoslibro7).then(res=>{alert(datoslibro7.titulo+ " guardado en FB");});
	let datoslibro8:Libro=new Libro();
	datoslibro8.titulo="La guerra de los mundos";
	datoslibro8.autor="H. G. Wells";
	datoslibro8.sinopsis="";
	datoslibro8.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/wmg_art_10579_2961.jpg?alt=media&token=2cd8ec0e-934d-499d-ae08-9476e4da8eba";
	this.dbFirebase.guardarLibro(datoslibro8).then(res=>{alert(datoslibro8.titulo+ " guardado en FB");});
	let datoslibro9:Libro=new Libro();
	datoslibro9.titulo="El ocho";
	datoslibro9.autor="Katherine Neville";
	datoslibro9.sinopsis="";
	datoslibro9.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/9788483465202.jpg?alt=media&token=84766bda-fcf1-4ac7-9841-aa99a22872ff";
	this.dbFirebase.guardarLibro(datoslibro9).then(res=>{alert(datoslibro8.titulo+ " guardado en FB");});
	let datoslibro10:Libro=new Libro();
	datoslibro10.titulo="Y no quedó ninguno";
	datoslibro10.autor="Agatha Christie";
	datoslibro10.sinopsis="";
	datoslibro10.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/image_1165_1_96565.jpg?alt=media&token=bedb0247-b2e8-4fe1-a148-181c8b16d303";
	this.dbFirebase.guardarLibro(datoslibro10).then(res=>{alert(datoslibro10.titulo+ " guardado en FB");});
 }
  
 delLibro(titulo) { this.dbFirebase.delLibro(titulo); }
  
  ionViewDidEnter()
 {
	
 }
 
  
}

