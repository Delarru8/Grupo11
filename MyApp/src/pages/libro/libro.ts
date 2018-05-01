import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';
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

	public lib: Libro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.lib = navParams.get("libroDado");
	  alert(this.lib);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibroPage');
  }

  openPage(pagina){
	  this.navCtrl.push(pagina);
  }
  
  irHome(){
	  this.navCtrl.setRoot(HomePage);
  }
  
}
