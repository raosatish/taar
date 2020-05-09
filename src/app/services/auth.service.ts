import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:UserData[]=[
    new UserData('srao', 'password', 'Satish', 'Rao', true),
    new UserData('admin', 'password01!', 'Admin', 'Admin', true)
  ]

  constructor() { }

  login(username: string, password: string): UserInfo | null {
     if(this.users.filter(x=>x.username == username && x.password == password)){
          let user:UserData[] = this.users.filter(x=>x.username == username && x.password == password);
          if(user.length > 0) {
            var user1 = user[0];
            return new UserInfo(username,user1.firstname,user1.lastname,user1.isadmin);
          }
       }
     return null;
  }

  logout(username: string):boolean {
    if(this.users.filter(x=>x.username == username)){
      return true;
    return false;  
    }
  }
}

export class UserInfo{
  username:string;
  firstname: string;
  lastname: string;
  isadmin: boolean;
  constructor(username, firstname, lastname, isadmin){
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.isadmin = isadmin;
  }
}

export class UserData{
  username:string;
  password:string;
  firstname: string;
  lastname: string;
  isadmin: boolean;
  constructor(username, password, firstname, lastname, isadmin){
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.isadmin = isadmin;
    this.password = password;
  }
}