import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms'

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  private myForm: FormGroup;

  private mobiles = [
    'android', 'apple', 'black berry', 'Windows', 'Symbian'
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        userName: ['codekul', Validators.required],
        email: ['getin@codekul.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      password: ['', [Validators.required, this.passwordValidator]],
      mobile: 'android',
      cities: this.formBuilder.array([
        new FormControl('Pune'),
        new FormControl('Mumbai')
      ])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm);
  }

  addNewCity() {
    (<FormArray>this.myForm.controls['cities']).push(new FormControl());
  }

  passwordValidator(control: FormControl): { [key: string]: any } {
    let obj = { error: 'Password length must be greater than 3' };
    
    if(control.value.length > 3) {
      return null;
    }
    return obj ;
  }
}
