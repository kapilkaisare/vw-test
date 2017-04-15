import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

import { AuthGuard } from './services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { VrplayerComponent } from './vrplayer/vrplayer.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent }
];
