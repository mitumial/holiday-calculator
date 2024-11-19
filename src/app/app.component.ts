import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HolidayValidatorComponent } from './components/holiday-validator/holiday-validator.component';
import { TblHolidaysComponent } from './components/tbl-holidays/tbl-holidays.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, HolidayValidatorComponent, TblHolidaysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holiday-calculator';
}
