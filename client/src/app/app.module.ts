import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { HomeComponent } from './landing/components/home/home.component';
import { LoginComponent } from './landing/containers/login/login.component';
import { RegisterComponent } from './landing/containers/register/register.component';
import { AuthFormComponent } from './landing/components/auth-form/auth-form.component';
import { HeaderComponent } from './landing/components/header/header.component';
import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/components/dashboard-header/dashboard-header.component';
import { RaiseIncidentComponent } from './dashboard/containers/raise-incident/raise-incident.component';
import { RaiseFormComponent } from './dashboard/components/raise-form/raise-form.component';
import { IncidentsComponent } from './dashboard/containers/incidents/incidents.component';
import { IncidentItemComponent } from './dashboard/components/incident-item/incident-item.component';

import { AuthService } from './landing/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthFormComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    RaiseIncidentComponent,
    RaiseFormComponent,
    IncidentsComponent,
    IncidentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
