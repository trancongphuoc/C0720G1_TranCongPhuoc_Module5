import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../model/IStudent';
import {Router} from '@angular/router';

@Injectable()

export class StudentService {


  constructor(private http: HttpClient, private router: Router) {
  }

  getAllStudent(): Observable<IStudent[]> {
    // @ts-ignore
    return this.http.get('http://localhost:8080/api-student/list');
  }

  // getAllStudent(){
  //   return this.http.get('http://localhost:8080/api-student/list');
  // }


  createStudent(student: IStudent) {
    const header = new Headers({'Content-Type': 'application/json' });

    // @ts-ignore
    this.http.post('http://localhost:8080/api-student/create', student, header).toPromise().catch(err => console.log(err));

    // @ts-ignore
    this.router.navigate('/student');
  }
}
