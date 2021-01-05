import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private url = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

}
