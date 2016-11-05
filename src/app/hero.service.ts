import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
 
@Injectable()
export class HeroService {  
  items: FirebaseListObservable<any>;   
  constructor(af: AngularFire) {
    this.items = af.database.list('/hero');
  }
  getHeroes(): Promise< FirebaseListObservable<any> > {   
    return Promise.resolve(this.items);
  }
}