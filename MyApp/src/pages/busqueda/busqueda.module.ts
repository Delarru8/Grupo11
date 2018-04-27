import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaPage } from './busqueda';

@NgModule({
  declarations: [
    BusquedaPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaPage),
  ],
})
export class BusquedaPageModule {}
