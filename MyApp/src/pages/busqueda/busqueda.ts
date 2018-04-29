import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
	
	public _items:String[]=['aaa','bbbx','bag','ccxc'];
	public items:String[];
	
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
  
  //prueba


  

  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this._items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  


//fin prueba
  
}
