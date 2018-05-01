import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SiersProvider} from '../../providers/siers/siers';
import {Libro} from '../../models/libro.model';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibroPage');
  }

  openPage(pagina)
  {
	  this.navCtrl.push(pagina);
  }
  
  irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }
  
  disponible(){
	  var biblio = document.getElementById("bibliovalue");
	  var biblioteca = bibliovalue.options[bibliovalue.selectedIndex].value;
	  if(biblioteca == "leg" || biblioteca == "gl" || biblioteca == "alc")
	  {let disponible = false;}
	  else
	  {let disponible = true;}
  
	  return disponible;
  }
  
  showAlert() {
	 
	  var biblio = document.getElementById("bibliovalue");
	  var biblioteca = bibliovalue.options[bibliovalue.selectedIndex].value;
	  
	  if(biblioteca == "leg" || biblioteca == "gl" || biblioteca == "alc"){
			this.navCtrl.setRoot(HomePage);
	  
			let alert = this.alertCtrl.create({
			title: 'En espera',
			subTitle: 'Te has puesto en la lista de espera. Se te avisará cuando este disponible',
			buttons: ['OK']
			});
			alert.present();
		}
		
	  else{
		var alertfecha = document.getElementById("fecha").value;
		if(alertfecha != ""){
			this.navCtrl.setRoot(HomePage);
			
			let alert = this.alertCtrl.create({
			title: 'Reservado',
			subTitle: 'Puede recoger el libro en la fecha indicada: '+alertfecha,
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
