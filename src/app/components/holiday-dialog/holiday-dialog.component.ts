import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../referencias-material/referencias-material.module';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-holiday-dialog',
  standalone: true,
  imports: [
    ReferenciasMaterialModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle
  ],
  templateUrl: './holiday-dialog.component.html',
  styleUrl: './holiday-dialog.component.css'
})

export class HolidayDialogComponent {
  constructor(public dialogRef: MatDialogRef<HolidayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
}
