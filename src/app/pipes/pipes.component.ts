import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  osName = 'android';
  dateTime = new Date();
  money = 500;

  mobiles = [
    'Android',
    'apple',
    'windows',
    'symbian',
    'alpha'
  ];

  asyncData: Promise<string>;

  constructor() {
    this.asyncData = new Promise<string>((res, rej) => {
      setTimeout(data => {
        console.log('called');
        res('data');
      }, 1500);
    });
   }

  ngOnInit() {
    
  }

  addOs(os: string) {
    this.mobiles.push(os);
  }
}
