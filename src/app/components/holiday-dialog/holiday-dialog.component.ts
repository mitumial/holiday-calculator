import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-holiday-dialog',
  standalone: true,
  imports: [],
  templateUrl: './holiday-dialog.component.html',
  styleUrl: './holiday-dialog.component.css'
})

export class HolidayDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
