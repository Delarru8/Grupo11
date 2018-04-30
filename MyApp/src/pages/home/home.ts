
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';



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
	
	listaLibros:any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:SiersProvider) {

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
  
  openPage(pagina){
	  this.navCtrl.push(pagina);
  }
  
  irHome(){
	  this.navCtrl.setRoot(HomePage);
  }
  
  //AÑADIR LIBROS A FIREBASE
  
  addLibro(){
	let datoslibro5:Libro=new Libro();
	datoslibro5.titulo="Harrypopop Potter";
	datoslibro5.autor="J. K. Rowling";
	datoslibro5.imagen="https://firebasestorage.googleapis.com/v0/b/siers-1222a.appspot.com/o/libro.jpg?alt=media&token=e42170a1-ae3c-4d28-aa3e-87cddb521177";
	this.dbFirebase.guardarLibro(datoslibro5).then(res=>{alert(datoslibro5.titulo+ " guardado en FB");});
	let datoslibro:Libro=new Libro();
	datoslibro.titulo="Harry Potter";
	datoslibro.autor="J. K. Rowling";
	this.dbFirebase.guardarLibro(datoslibro).then(res=>{alert(datoslibro.titulo+ " guardado en FB");});
	let datoslibro2:Libro=new Libro();
	datoslibro2.titulo="Los Juegos Del Hambre";
	datoslibro2.autor="Persona Famosa";
	this.dbFirebase.guardarLibro(datoslibro2).then(res=>{alert(datoslibro2.titulo+ " guardado en FB");});
	let datoslibro3:Libro=new Libro();
	datoslibro3.titulo="Diario de Greg";
	datoslibro3.autor="Yo";
	this.dbFirebase.guardarLibro(datoslibro3).then(res=>{alert(datoslibro3.titulo+ " guardado en FB");});
	let datoslibro4:Libro=new Libro();
	datoslibro4.titulo="Me llamo Ralph";
	datoslibro4.autor="Matt Groening";
	this.dbFirebase.guardarLibro(datoslibro4).then(res=>{alert(datoslibro4.titulo+ " guardado en FB");});
 }
  
 delLibro(titulo) { this.dbFirebase.delLibro(titulo); }
  
  ionViewDidEnter()
 {
 this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;});
 }
  

  
}

