import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment!: string;
  constructor() {
    this.assignment= 'Marble- Exercise 6.3-Layouts'
  }

  ngOnInit(): void {
  }

}
