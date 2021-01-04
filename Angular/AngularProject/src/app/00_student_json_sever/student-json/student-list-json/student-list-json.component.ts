import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StudentJsonService} from '../../service/student-json.service';
import {IStudent} from '../../../00_studen_management/model/IStudent';

@Component({
  selector: 'app-student-list-json',
  templateUrl: './student-list-json.component.html',
  styleUrls: ['./student-list-json.component.scss']

})
export class StudentListJsonComponent implements OnInit, OnChanges {

  private studentList: IStudent[];

  private student: IStudent;

  constructor(private studentJsonService: StudentJsonService) { }

  ngOnInit(): void {
    this.studentJsonService.getAllStudent().toPromise()
      .then(data => this.studentList = data)
      .catch(err => console.log(err));
  }


  getStudent(student) {
    this.student = student;
  }


  onLoad() {
    this.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.studentJsonService.getAllStudent().toPromise()
    //   .then(data => this.studentList = data)
    //   .catch(err => console.log(err));
  }
}
