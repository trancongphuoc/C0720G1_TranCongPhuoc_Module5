import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/so-tiet-kiem';
import {KyHan} from '../model/ki-han';

@Injectable({
  providedIn: 'root'
})
export class KyHanService {

  private url = 'http://localhost:3000/kyHan';

  constructor(private http: HttpClient) { }

  getAll(): Observable<KyHan[]> {
    return this.http.get<KyHan[]>(this.url);
  }

}
