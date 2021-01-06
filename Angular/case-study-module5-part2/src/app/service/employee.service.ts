import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEmployee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }

  getById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.url + '/' + id);
  }

  create(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.url, employee);
  }

  update(employee: IEmployee, id: number): Observable<IEmployee> {
    return this.http.put<IEmployee>(this.url + '/' + id, employee);
  }

  deleteById(id: number): Observable<IEmployee> {
    return this.http.delete<IEmployee>(this.url + '/' + id);
  }
}
