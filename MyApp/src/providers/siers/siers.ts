import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Libro } from '../../models/libro.model';
/*
  Generated class for the SiersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiersProvider {
  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello SiersProvider Provider');
  }

}
