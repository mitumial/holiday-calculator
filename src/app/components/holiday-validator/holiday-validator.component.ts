import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-holiday-validator',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatDividerModule,MatButtonModule],
  templateUrl: './holiday-validator.component.html',
  styleUrl: './holiday-validator.component.css'
})
export class HolidayValidatorComponent {
  readonly startDate = new Date(2024, 0, 1);
}
