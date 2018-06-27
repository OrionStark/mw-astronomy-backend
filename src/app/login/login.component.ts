import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { UserServices } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;

  constructor(private _formBuilder: FormBuilder,
    private _route: Router,
    private _userServices: UserServices,
    private _snackBar: MatSnackBar) {

    this.loginForm = _formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }

  ngOnInit() {
    if ( localStorage.getItem('token') ) {
      this._route.navigate(['dashboard']);
    }
  }

  login(data: any) {
    this.username = data.username;
    this.password = data.password;
    this._userServices.login(data)
      .subscribe(
        result => {
          console.log(result);
          localStorage.setItem('token', result['api_token']);
          localStorage.setItem('greetings', result['message']);
          localStorage.setItem('name', result['data'].name);
          this._route.navigate(['dashboard']);
        },
        err => {
          this._snackBar.open(err['error']['message'], 'OK', {duration: 2000});
        }
      );
  }

}
