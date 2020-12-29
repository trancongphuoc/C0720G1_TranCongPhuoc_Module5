import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student: IStudent = {
    name : '',
    dateOfBirth: '',
    address: '',
    avatar: '',
    mark: 0,
    status: false
  };

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  createNewStudent() {
    console.log(this.student);
    this.studentService.createStudent(this.student);
  }
}
