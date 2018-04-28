import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SiersProvider } from '../providers/siers/siers';

export const fireBaseConfig={
  apiKey: "AIzaSyBV7td_68dyOgqb8R1hSkzDGhTEfPaB9eQ",
    authDomain: "siers-1222a.firebaseapp.com",
    databaseURL: "https://siers-1222a.firebaseio.com",
    projectId: "siers-1222a",
    storageBucket: "siers-1222a.appspot.com",
    messagingSenderId: "333571279325"};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(fireBaseConfig),
	AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiersProvider
  ]
})
export class AppModule {}



