import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAttachService} from '../model/attach-service';

@Injectable({
  providedIn: 'root'
})
export class AttachServiceDao {

  private url = 'http://localhost:3000/attachService';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IAttachService[]> {
    return this.http.get<IAttachService[]>(this.url);
  }

  getById(id: number): Observable<IAttachService> {
    return this.http.get<IAttachService>(this.url + '/' + id);
  }

  create(attachService: IAttachService): Observable<IAttachService> {
    return this.http.post<IAttachService>(this.url, attachService);
  }

  update(attachService: IAttachService, id: number): Observable<IAttachService> {
    return this.http.put<IAttachService>(this.url + '/' + id, attachService);
  }

  deleteById(id: number): Observable<IAttachService> {
    return this.http.delete<IAttachService>(this.url + '/' + id);
  }


}
