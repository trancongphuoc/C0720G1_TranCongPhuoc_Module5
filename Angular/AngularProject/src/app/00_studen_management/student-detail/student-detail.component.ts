import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input() studentDetail: IStudent;

  @Output() delete = new EventEmitter<number>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  deleteabc() {
    this.delete.emit(this.studentDetail.id);
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.studentDetail.id);
  }



  update() {
    this.studentService.saveStudent(this.studentDetail);
  }


}
