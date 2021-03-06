import { LoginComponent } from './../login/login.component';
import { User } from './user';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  user: User;
  errMsg : string;

  handler = err => {
    console.log(`Error is ${err}`);
    this.errMsg = 'need argument ';
  };

  constructor(
    private http: HttpService
  ) {
    this.user = new User();
  }

  ngOnInit() {

    this.putEx();
    this.http.deleteByKey().subscribe(res => console.log(res), this.handler);
  }

  addNewUser(userName: string, mobile: string) {
    let user: User = new User();
    user.userName = userName;
    user.mobile = mobile;

    this.http.saveUser(user).subscribe(res => console.log(res));
  }
  search(id: string) {
    this.http.oneUser(id).subscribe(res => {
      this.user = res;
    },this.handler);
  }

  searchByUserName(userName: string) {
    this.http.searchByUserName(userName).subscribe(res => {
      for (let us in res) {
        console.log(res[us]['userName'] === userName);
      }
    }, this.handler);
  }

  putEx() {
    this.http.putEx().subscribe(res => console.log(res));
  }
}


