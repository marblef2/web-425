 import { Injectable } from '@angular/core';
 import { IComposer } from './composer.interface';
 import { Observable } from 'rxjs';
 import { of } from 'rxjs';
 import { map } from 'rxjs/operators';

 @Injectable({
   providedIn: 'root'
 })
 export class ComposerService {

   composers: Array<IComposer>;

   constructor() {
     this.composers = [
       {composerId: 8675309, fullName: "Alessandro Scarlatti", genre: "Classical"},
       {composerId: 8675308, fullName:"Johann Sebastian Bach",genre:"Classical"},
       {composerId: 8675307, fullName:"John Williams",genre: "Modern"},
       {composerId: 8675306, fullName:"Florence Price",genre:"Classical"},
       {composerId: 8675305, fullName:"Johann Pachelbel",genre:"Classical"}
     ]
   }

   getComposers(): Observable<IComposer[]> {
     return of(this.composers);
   }

   getComposer(composerId: number) {
     for (let composer of this.composers) {
       if (composer.composerId === composerId) {
         return composer;
       }
     }
     return {} as IComposer;
   }

   filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
 }
