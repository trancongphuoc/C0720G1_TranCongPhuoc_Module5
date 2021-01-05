import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(customer: ICustomer): Observable<any> {
    return this.http.post(this.url, customer);
  }

  update(customer: ICustomer, id: number): Observable<any> {
    return this.http.put(this.url + '/' + id, customer);
  }

  deleteById(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  getByNameContaining(name: string) {
    return this.http.get(this.url + '?name_like=' + name);
  }

  getAllHavePagination(name: string, limit: number, page: number) {
    return this.http.get(this.url + '?name_like=' + name + '&_limit=' + limit + '&_page=' + page);
  }
}
