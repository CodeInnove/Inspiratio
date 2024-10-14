import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/mainpage/components/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
  ],
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>`,
})
export class AppComponent {

}
