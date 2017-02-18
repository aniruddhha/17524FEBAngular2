import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-on',
  templateUrl: './more-on.component.html',
  styleUrls: ['./more-on.component.css']
})
export class MoreOnComponent implements OnInit {

  city: string;
  constructor() { }

  ngOnInit() {
  }

  makeUpper(city: string) {
    this.city = city.toUpperCase();
  }

}
