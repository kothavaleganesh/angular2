import { provideRouter, RouterConfig }  from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: RouterConfig = [
  {path:'signup',component:SignupComponent
},{
  path:'home',component:HomeComponent
}];
export const appRouterProviders = [
  provideRouter(routes)
];
export class AppModule { }
