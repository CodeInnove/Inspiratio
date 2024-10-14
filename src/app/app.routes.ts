import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/mainpage/pages/home/home.component';
import { LoginComponent } from './modules/mainpage/pages/login/login.component';
import { NavbarComponent } from './modules/mainpage/components/navbar/navbar.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nav',
    component: NavbarComponent
  }
  
];
