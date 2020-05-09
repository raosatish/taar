import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppstateService } from 'src/app/services/appstate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private appState: AppstateService, private router:Router) { }

  ngOnInit(): void {
    if(this.appState.IsLoggedIn){
      if(this.auth.logout(this.appState.UserName)){
        this.appState.clearUserInfo();
        this.router.navigate(['login']);
        return;
      }
    }
    this.router.navigate(['/invalidroute']);
  }

}
