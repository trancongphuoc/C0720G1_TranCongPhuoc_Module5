import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from '../../../00_studen_management/model/IStudent';
import {StudentJsonService} from '../../service/student-json.service';

@Component({
  selector: 'app-student-delete-json',
  templateUrl: './student-delete-json.component.html',
  styleUrls: ['./student-delete-json.component.scss']
})
export class StudentDeleteJsonComponent implements OnInit {

  @Input() student: IStudent;

  @Output() onLoad = new EventEmitter();

  constructor(private studentJsonService: StudentJsonService) { }

  ngOnInit(): void {
  }

  delete(id) {
    this.studentJsonService.deleteStudentById(id).toPromise()
      .then(data => {
        console.log(data);
        this.onLoad.emit();
      })
      .catch(err => console.log(err));


  }

}
