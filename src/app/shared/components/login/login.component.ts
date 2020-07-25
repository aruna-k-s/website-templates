import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userRegisterForm: FormGroup;
  userLoginForm: FormGroup;

  constructor(private apiService: ApiService, private dialogRef: MatDialogRef<LoginComponent>) { }


  showPassword = false;
  confPassword = false;
  regPassword;
  regEmail;
  confRegPassword;

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.userRegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confPassword: new FormControl('', Validators.required)
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  showLoginPassword(element) {
    const ele = document.getElementById(element);
    this.showPassword ? ele.setAttribute('type', 'text') : ele.setAttribute('type', 'password');
  }

  registerUser() {
    this.userRegisterForm.removeControl('confPassword');
    this.apiService.postdata(environment.api_url + 'user/register', this.userRegisterForm.value).subscribe(res => {
      console.log(res);
      if (res['status'] === 'success') {
        this.close();
      }
    });
  }

  loginUser() {
    this.apiService.postdata(environment.api_url + 'user/login', this.userLoginForm.value).subscribe(res => {
      console.log(res);
    })
  }

  close() {
    this.dialogRef.close({
      message: 'dialog closed'
    });
  }
}
