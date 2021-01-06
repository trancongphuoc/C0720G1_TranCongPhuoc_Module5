import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceDao {

  private url = 'http://localhost:3000/service';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IService[]> {
    return this.http.get<IService[]>(this.url);
  }

  getById(id: number): Observable<IService> {
    return this.http.get<IService>(this.url + '/' + id);
  }

  create(service: IService): Observable<IService> {
    return this.http.post<IService>(this.url, service);
  }

  update(service: IService, id: number): Observable<IService> {
    return this.http.put<IService>(this.url + '/' + id, service);
  }

  deleteById(id: number): Observable<IService> {
    return this.http.delete<IService>(this.url + '/' + id);
  }
}
