import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { IncidentsComponent } from './dashboard/containers/incidents/incidents.component';
import { RaiseIncidentComponent } from './dashboard/containers/raise-incident/raise-incident.component';
import { HomeComponent } from './landing/components/home/home.component';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { LoginComponent } from './landing/containers/login/login.component';
import { RegisterComponent } from './landing/containers/register/register.component';

const routes: Routes = [
  { path: '', component: LandingComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ] },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: IncidentsComponent },
    { path: 'create-incident', component: RaiseIncidentComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
