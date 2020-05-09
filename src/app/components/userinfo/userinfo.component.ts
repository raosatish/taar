import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  IsLoggedIn:boolean;
  UserName:string;
  constructor(private appState:AppstateService, private router:Router) { }

  ngOnInit(): void {
    this.IsLoggedIn = this.appState.IsLoggedIn;
    this.UserName = this.appState.UserName;
  }

  logout(){
    this.router.navigate(['/logout']);
  }

}
