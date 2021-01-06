import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContractDetail} from '../model/contract-detail';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  private url = 'http://localhost:3000/contractDetail';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IContractDetail[]> {
    return this.http.get<IContractDetail[]>(this.url);
  }

  getAllById(id: number): Observable<IContractDetail[]> {
    return this.http.get<IContractDetail[]>(this.url + '?contract.id=' + id);
  }

  getById(id: number): Observable<IContractDetail> {
    return this.http.get<IContractDetail>(this.url + '/' + id);
  }

  create(contractDetail: IContractDetail): Observable<IContractDetail> {
    return this.http.post<IContractDetail>(this.url, contractDetail);
  }

  update(contractDetail: IContractDetail, id: number): Observable<IContractDetail> {
    return this.http.put<IContractDetail>(this.url + '/' + id, contractDetail);
  }

  deleteById(id: number): Observable<IContractDetail> {
    return this.http.delete<IContractDetail>(this.url + '/' + id);
  }
}
