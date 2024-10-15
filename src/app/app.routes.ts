import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/mainpage/pages/home/home.component';
import { LoginComponent } from './modules/mainpage/pages/login/login.component';
import { NavbarComponent } from './modules/mainpage/components/navbar/navbar.component';
import path from 'path';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: NavbarComponent
  },
  
];
