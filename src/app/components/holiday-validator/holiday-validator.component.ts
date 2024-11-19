import { Component, inject, model, signal } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { HolidayDialogComponent } from '../holiday-dialog/holiday-dialog.component';
import { HolidayService } from '../../services/holiday.service';

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

  selectedDate: Date | null = null;
  

  constructor(private holidayService: HolidayService, private dialog: MatDialog){}

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
  }

  onVerifyDate() {
    if (this.selectedDate) {
      const year = this.selectedDate.getFullYear();
      const month = this.selectedDate.getMonth() + 1;  
      const day = this.selectedDate.getDate();


      this.holidayService.verifyDate(year, month, day).subscribe(
        (response: string) => {
          this.openDialog(response);
        },
        (error) => {
          window.alert(error.message);
        }
      );
    }
  }

  openDialog(response: string) {
    this.dialog.open(HolidayDialogComponent, {
      data: { message: 'response' },  
    });
  }
}
