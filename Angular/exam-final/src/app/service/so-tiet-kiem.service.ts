import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/so-tiet-kiem';

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemService {

  private url = 'http://localhost:3000/soTietKiem';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.url);
  }

  getById(id: number): Observable<SoTietKiem> {
    return this.http.get<SoTietKiem>(this.url + '/' + id);
  }

  deleteById(id: number): Observable<SoTietKiem> {
    return this.http.delete<SoTietKiem>(this.url + '/' + id);
  }


  update(soTietKiem: SoTietKiem, id: number) {
    return this.http.put<SoTietKiem>(this.url + '/' + id, soTietKiem);
  }


  searchById(id: number): Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.url + '?id=' + id);
  }

  searchByName(name: string): Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.url + '?khachHang.name_like=' + name);
  }


  getAllHavePagination(page: number, limit: number) {
    return this.http.get<SoTietKiem[]>(this.url + '/_page=' + page + '&_limit=' + limit);
  }
}
