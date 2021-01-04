import {Component, OnInit} from '@angular/core';
import {IStudent} from '../../../00_studen_management/model/IStudent';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentJsonService} from '../../service/student-json.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-update-json',
  templateUrl: './student-update-json.component.html',
  styleUrls: ['./student-update-json.component.scss']
})
export class StudentUpdateJsonComponent implements OnInit {

  private student: IStudent;
  private sub: Subscription;

  private createForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private studentJsonService: StudentJsonService,
              private router: Router) {
    this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl(),
      dateOfBirth: new FormControl('2000-01-01'),
      address: new FormControl(),
      mark: new FormControl(),
      avatar: new FormControl(),
      status: new FormControl()
    });
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(id => {
      this.studentJsonService.findStudentById( id.get('id') ).toPromise()
        .then(data => {
          this.createForm.patchValue(data);
        })
        .catch(err => console.log(err));
    });

  }

  onSubmit() {
    this.studentJsonService.updateStudent(this.createForm.value).toPromise()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.router.navigateByUrl('student-json');
  }
}
