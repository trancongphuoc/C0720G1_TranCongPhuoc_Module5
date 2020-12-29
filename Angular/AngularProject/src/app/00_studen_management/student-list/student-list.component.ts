import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from '../service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],

})
export class StudentListComponent implements OnInit {

  // studentList: IStudent[] = [
  //   {
  //     id: 1,
  //     name: 'Jin',
  //     dateOfBirth: '01/01/2000',
  //     address: 'Nagasaki',
  //     avatar: 'https://i.pinimg.com/280x280_RS/42/44/30/424430fd0c68020695ede3ca3f27fc53.jpg',
  //     mark: 6,
  //     status: false
  //   },
  //   {
  //     id: 2,
  //     name: 'Rengar',
  //     dateOfBirth: '01/01/2000',
  //     address: 'Summer',
  //     avatar: 'https://i.pinimg.com/474x/ca/28/c7/ca28c7b21c11ae90bd0ad8be56271ef5.jpg',
  //     mark: 8,
  //     status: true
  //   },
  //   {
  //     id: 3,
  //     name: 'Gragas',
  //     dateOfBirth: '01/01/2000',
  //     address: 'Busan',
  //     avatar: 'https://i.pinimg.com/originals/1c/e7/35/1ce735234028c718c8a29f7989ffbb8c.jpg',
  //     mark: 3,
  //     status: false
  //   },
  //   {
  //     id: 4,
  //     name: 'Frank',
  //     dateOfBirth: '01/01/2000',
  //     address: 'Pleyku\'s',
  //     avatar: 'https://i.pinimg.com/474x/ca/28/c7/ca28c7b21c11ae90bd0ad8be56271ef5.jpg',
  //     mark: 7,
  //     status: true
  //   },
  //   {
  //     id: 4,
  //     name: 'Yasuo',
  //     dateOfBirth: '01/01/2000',
  //     address: 'England',
  //     avatar: 'https://i.pinimg.com/280x280_RS/42/44/30/424430fd0c68020695ede3ca3f27fc53.jpg',
  //     mark: 2,
  //     status: false
  //   },
  // ];

  studentList: IStudent[];

  studentDetail: IStudent;


  constructor(private studentService: StudentService) {
    studentService.getAllStudent().subscribe((data: IStudent[]) => {

      this.studentList = data;
    }, error => {

      console.log(error);

    });

    // studentService.getAllStudent().toPromise().then(data => {
    //   this.studentList = data;
    // });
  }


  ngOnInit(): void {
  }

  getStudentDetail(student: IStudent) {
    this.studentDetail = student;
  }

  deleteStudent(id: number) {
    const index = this.studentList.findIndex(e => e.id === id);

    this.studentList.splice(index, 1);
  }
}
