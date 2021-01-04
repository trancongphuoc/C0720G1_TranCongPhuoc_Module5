import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../../../00_studen_management/model/IStudent';
import {StudentJsonService} from '../../service/student-json.service';

@Component({
  selector: 'app-student-detail-json',
  templateUrl: './student-detail-json.component.html',
  styleUrls: ['./student-detail-json.component.scss']
})
export class StudentDetailJsonComponent implements OnInit {

  @Input() student: IStudent;


  constructor(private studentJsonService: StudentJsonService) { }

  ngOnInit(): void {
    // this.studentJsonService.findStudentById(this.id).toPromise()
    //   .then(data => this.student = data)
    //   .catch(err => console.log(err));
  }


}
