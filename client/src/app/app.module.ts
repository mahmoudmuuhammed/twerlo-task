import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { HomeComponent } from './landing/home/home.component';
import { SignupComponent } from './landing/signup/signup.component';
import { SigninComponent } from './landing/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboradHeaderComponent } from './dashboard/dashborad-header/dashborad-header.component';
import { CreateIncidentComponent } from './dashboard/create-incident/create-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    DashboradHeaderComponent,
    CreateIncidentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
