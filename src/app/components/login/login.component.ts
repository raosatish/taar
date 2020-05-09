import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';
import { LoginValidators } from './login.validators';
import { AuthService, UserInfo } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AppstateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), LoginValidators.cannotContainSpace]),
    password: new FormControl('', Validators.required)
  });
  constructor(private appState:AppstateService, private auth: AuthService, private router: Router) { 
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  login() 
  {
    let loggedIn:UserInfo = this.auth.login(this.username.value, this.password.value);
    if(loggedIn){
      localStorage.setItem('token',JSON.stringify(loggedIn) );
      this.router.navigate(['/main']);
    }
    else{
      localStorage.removeItem('token');
    }
  }
  }
