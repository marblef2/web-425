import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  title!: string;
  constructor() {
    this.title = "Bob's Computer Repair Shop";
   }

  ngOnInit(): void {
  }

}
