import { Component, OnInit } from '@angular/core';

export default class Person{
  fullName:string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName=fullName;
    this.favoriteColor=favoriteColor;
    this.favoriteFood=favoriteFood;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Fred Marble", "Lasagna", "Purple");
  }

  ngOnInit(): void {
  }

}
