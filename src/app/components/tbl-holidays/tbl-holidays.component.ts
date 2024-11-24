import { Component } from '@angular/core';
import { Holiday } from '../../models/holiday';
import { HolidayService } from '../../services/holiday.service';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule } from '../../referencias-material/referencias-material.module';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tbl-holidays',
  standalone: true,
  imports: [NgxDatatableModule, ReferenciasMaterialModule, MatButtonModule],
  templateUrl: './tbl-holidays.component.html',
  styleUrls: ['./tbl-holidays.component.css'],
})
export class TblHolidaysComponent {
  public holidays: Holiday[] = [];
  public cols = [
    { name: "Festivo", prop: "name" ,width: 700, flexGrow: 2},
    { name: "Fecha", prop: "month" , width: 200, flexGrow: 1}
  ];
  public columnMode = ColumnMode;
  public selectionType = SelectionType;

  constructor(private holidayService: HolidayService) {
  }
  search(): void {
    this.findAll();
  }

  public findAll() {
    this.holidayService.findAll().subscribe({
      next: response => {
        this.holidays = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }
}
