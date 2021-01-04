import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {checkPassword} from './check-password';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  contractForm = new FormGroup({
    email: new FormControl('teopro@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // @ts-ignore
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contractForm);
  }
}
