import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    
    CommonModule,
    
  ],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  date = new Date();

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
  }
}
