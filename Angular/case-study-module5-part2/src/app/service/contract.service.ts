import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IContract} from '../model/contract';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private url = 'http://localhost:3000/contract';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IContract[]> {
    return this.http.get<IContract[]>(this.url);
  }

  getAllByIdCustomer(id: number): Observable<IContract[]> {
    return this.http.get<IContract[]>(this.url + '?customer.id=' + id);
  }

  getById(id: number): Observable<IContract> {
    return this.http.get<IContract>(this.url + '/' + id);
  }

  create(contract: IContract): Observable<IContract> {
    return this.http.post<IContract>(this.url, contract);
  }

  update(contract: IContract, id: number): Observable<IContract> {
    return this.http.put<IContract>(this.url + '/' + id, contract);
  }

  deleteById(id: number): Observable<IContract> {
    return this.http.delete<IContract>(this.url + '/' + id);
  }
}
