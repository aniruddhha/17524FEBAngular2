import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

  myName: string;

  constructor() {
    this.myName = 'codekul.com'
  }

  cube(num : number) : number {
    return num*num*num;
  }
}
