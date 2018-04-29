
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
let datoslibro:Libro=new Libro();
datoslibro.titulo="Harry Potter";
datoslibro.autor="J. K. Rowling";
this.dbFirebase.guardarLibro(datoslibro).then(res=>{
alert(datoslibro.isbn+ " guardado en FB");
});
 }
  
 delLibro(isbn) { this.dbFirebase.delLibro(isbn); }
  
  ionViewDidEnter()
 {
 this.dbFirebase.getLibros().subscribe(listaLibros=>{this.listaLibros=listaLibros;});
 }
  

  
}

