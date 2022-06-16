import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIncidentComponent } from './dashboard/create-incident/create-incident.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './landing/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './landing/signin/signin.component';
import { SignupComponent } from './landing/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
  ] },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'create-incident', component: CreateIncidentComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
