import { Component } from '@angular/core';
import {ChangeDetectionStrategy, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, NavbarComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selected = model<Date | null>(null);

}
