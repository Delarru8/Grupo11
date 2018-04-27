import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrestadosPage } from './prestados';

@NgModule({
  declarations: [
    PrestadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PrestadosPage),
  ],
})
export class PrestadosPageModule {}
