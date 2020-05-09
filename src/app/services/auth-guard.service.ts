import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppstateService } from './appstate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appState:AppstateService, private router: Router) { }
  
  canActivate(){
    console.log("here");
    if(this.appState.IsLoggedIn) return true;
    
    this.router.navigate(['\login']);
    return false;
  }
}
