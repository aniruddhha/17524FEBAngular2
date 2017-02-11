import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  // templateUrl: './my.component.html',
  // styleUrls: ['./my.component.css']
  template : `
      <h1> Inline Template </h1>
  `,
  styles : [
    `
      h1 {
        border : 1px solid red;
      }
    `
  ]
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
