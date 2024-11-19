import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Holiday} from '../models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  url: string;

  constructor(private http: HttpClient) { 
    // no lo llame de environment porque angular seguia cambiando el localhost
    this.url = `http://localhost:8080/api/holiday`
  }
  public findAll(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.url}/all`);
  }
  public verifyDate(year: number, month: number, day: number): Observable<string> {
    return this.http.get(`${this.url}/verify/${year}/${month}/${day}`, {responseType: 'text'});
  }
}