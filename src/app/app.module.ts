import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AppstateService } from './services/appstate.service';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderlogoComponent } from './components/headerlogo/headerlogo.component';
import { SearchComponent } from './components/search/search.component';
import { ToolbarmenuComponent } from './components/toolbarmenu/toolbarmenu.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    NotFoundComponent,
    HeaderlogoComponent,
    SearchComponent,
    ToolbarmenuComponent,
    UserinfoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppstateService, FormBuilder, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
