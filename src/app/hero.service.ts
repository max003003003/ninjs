import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class HeroService {  
  items: FirebaseListObservable<any>;   
  af: AngularFire;
  constructor(af: AngularFire){
    this.af=af;
  }
  getHeroes(): Promise< Hero[] > {
  let result =[]
   this.items = this.af.database.list('/hero', { preserveSnapshot: true });
    this.items
      .subscribe(snapshots => {
        result=[]
        snapshots.forEach(snapshot => {
           result.push(snapshot.val());
           console.log(snapshot.val());
        });
    })
    return Promise.resolve(result);
  }
   
getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}


}