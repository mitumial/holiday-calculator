import { Component, inject, model, signal } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(inject(MAT_DIALOG_DATA), {
      data: {
        animal: 'panda',
      },
    });
  }
}
