import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { compileComponentFromMetadata } from '@angular/compiler';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
