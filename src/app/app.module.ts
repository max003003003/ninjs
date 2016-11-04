import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCO7AxFx0cb_FQGCyfVtwGUIjq3gJ6WVpc",
    authDomain: "contact-3281f.firebaseapp.com",
    databaseURL: "https://contact-3281f.firebaseio.com",
    storageBucket: "contact-3281f.appspot.com",
    messagingSenderId: "742032670073"
};


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
