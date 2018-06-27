import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServices } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  username: string;
  name: string;
  password: string;
  email: string;

  constructor(
    private _http: HttpClient, private _router: Router,
    private _formBuilder: FormBuilder, private _userServices: UserServices, private _snackBar: MatSnackBar) {
      this.registerForm = _formBuilder.group({
        'username': [null, Validators.required],
        'name': [null, Validators.required],
        'email': [null, Validators.required],
        'password': [null, Validators.required]
      });
    }

  ngOnInit() {
    if ( localStorage.getItem('token') ) {
      this._router.navigate(['dashboard']);
    }
  }

  register(data: any) {
    this._userServices.register(data)
      .subscribe(response => {
        console.log(response);
        if ( response['status'] === 'Register succeed' ) {
          this._snackBar.open(response['message'], 'OK', {duration: 2000});
          this._router.navigate(['login']);
        }
      }, err => {
        this._snackBar.open(err['error']['message'], 'OK', {duration: 2000});
      });
  }

}
