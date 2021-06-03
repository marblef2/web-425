import { Component, OnInit } from '@angular/core';

export default class Composer{
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Alessandro Scarlatti", "Classical"),
      new Composer("Johann Sebastian Bach","Classical"),
      new Composer("John Williams","Modern"),
      new Composer("Florence Price","Classical"),
      new Composer("Johann Pachelbel","Classical")
    ]
  }

  ngOnInit(): void {
  }

}
