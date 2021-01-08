import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KyHan} from '../model/ki-han';
import {KhachHang} from '../model/khach-hang';

@Injectable({
  providedIn: 'root'
})
export class KhachHangService {

  private url = 'http://localhost:3000/khachHang';

  constructor(private http: HttpClient) { }

  getAll(): Observable<KhachHang[]> {
    return this.http.get<KhachHang[]>(this.url);
  }
}
