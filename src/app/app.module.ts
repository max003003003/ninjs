import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { DashboardComponent} from './dashboard.component'
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
 import { HeroDetailComponent } from './hero-detail.component';
 import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';


import { AppRoutingModule }     from './app-routing.module';

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
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
   AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
