// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';

// export const routes: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'register', component: RegisterComponent },
//     { path: 'login', component: LoginComponent },
//     { path: 'home', component: HomeComponent },
// ];
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

