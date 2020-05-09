import { Injectable } from '@angular/core';
import { UserInfo } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
  IsLoggedIn: boolean;
  UserName: string;
  FirstName: string;
  LastName: string;
  IsAdmin: boolean;

  constructor() { 
    if(localStorage.getItem('token')){
      this.IsLoggedIn = true;
      this.setUserInfo();
    }
    else{
      this.IsLoggedIn = false;
      this.clearUserInfo();
    }
  }

  setUserInfo() {
    let json = localStorage.getItem('token');
    let userInfo:UserInfo = JSON.parse(json);
    this.UserName = userInfo.username;
    this.LastName = userInfo.lastname;
    this.FirstName = userInfo.firstname;
    this.IsAdmin = userInfo.isadmin;
  }

  clearUserInfo(){
    localStorage.removeItem('token');
    this.UserName = undefined;
    this.LastName = undefined;
    this.FirstName = undefined;
    this.IsAdmin = undefined;
  }
}
