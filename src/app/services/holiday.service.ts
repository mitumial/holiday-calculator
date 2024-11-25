import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday} from '../models/holiday';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}/festivos`;
  }
  public findByYear(year: number): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.url}/obtener/${year}`);
  }
  public verifyDate(year: number, month: number, day: number): Observable<string> {
    return this.http.get(`${this.url}/verificar/${year}/${month}/${day}`, {responseType: 'text'});
  }
}