import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibroPage } from './libro';

@NgModule({
  declarations: [
    LibroPage,
  ],
  imports: [
    IonicPageModule.forChild(LibroPage),
  ],
})
export class LibroPageModule {}
