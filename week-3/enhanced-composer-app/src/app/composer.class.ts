/**
 * Title: composer.class.ts
 * Author: Professor Krasso
 * Modified by: Fred Marble
 * Date: 9 June 2021
 * Description: Class file for the Composer object
 */

import {IComposer} from './composer.interface';

  export class Composer{

    composers: Array<IComposer>

    constructor() {
      this.composers = [
        {composerId: 8675309, fullName: "Alessandro Scarlatti", genre: "Classical"},
        {composerId: 8675308, fullName:"Johann Sebastian Bach",genre:"Classical"},
        {composerId: 8675307, fullName:"John Williams",genre: "Modern"},
        {composerId: 8675306, fullName:"Florence Price",genre:"Classical"},
        {composerId: 8675305, fullName:"Johann Pachelbel",genre:"Classical"}
      ]
    }

    getComposers(){
      return this.composers;
    }

    getComposer(composerId: number){
      for (let composer of this.composers){
        if (composer.composerId === composerId) {
          return composer;
        }
      }
    }
  }
