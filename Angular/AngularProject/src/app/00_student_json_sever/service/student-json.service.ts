import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../../00_studen_management/model/IStudent';

@Injectable()

export class StudentJsonService {

  private url = 'http://localhost:3000/student';
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getAllStudent(){
    return this.http.get(this.url);
  }

  findStudentById(id: number): Observable<IStudent> {
    return this.http.get(this.url + '/' + id);
  }


  createStudent(student: IStudent) {

    return this.http.post( this.url, student, this.header);
  }


  deleteStudentById(id: number) {
    return this.http.delete(this.url + '/' + id);
  }


  updateStudent(student: IStudent) {
    return this.http.put(this.url + '/' + student.id, student, this.header);
  }


}
