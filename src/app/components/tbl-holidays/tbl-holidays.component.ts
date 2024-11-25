import { Component } from '@angular/core';
import { Holiday } from '../../models/holiday';
import { HolidayService } from '../../services/holiday.service';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule } from '../../referencias-material/referencias-material.module';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tbl-holidays',
  standalone: true,
  imports: [NgxDatatableModule, ReferenciasMaterialModule, MatButtonModule, MatFormFieldModule, MatLabel, MatInputModule],
  templateUrl: './tbl-holidays.component.html',
  styleUrls: ['./tbl-holidays.component.css'],
})
export class TblHolidaysComponent {
  public holidays: Holiday[] = [];
  public cols = [
    { name: "Festivo", prop: "name" ,width: 600},
    { name: "Fecha", prop: "dateOfYear" , width: 500}
  ];
  public columnMode = ColumnMode;
  public selectionType = SelectionType;

  constructor(private holidayService: HolidayService) {
  }
  search(year: string): void {
    this.findByYear(+year);
  }

  public findByYear(year: number) {
    this.holidayService.findByYear(year).subscribe({
      next: response => {
        this.holidays = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }
}
