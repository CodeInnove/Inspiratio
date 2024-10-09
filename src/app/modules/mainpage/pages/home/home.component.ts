import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o módulo aqui
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedDate: Date | null = null;

  onDateChange(event: Date){
    console.log('Data Selecionada', event);
    this.selectedDate = event;
  }
}
