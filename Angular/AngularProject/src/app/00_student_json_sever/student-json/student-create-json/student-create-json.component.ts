import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentJsonService} from '../../service/student-json.service';

@Component({
  selector: 'app-student-create-json',
  templateUrl: './student-create-json.component.html',
  styleUrls: ['./student-create-json.component.scss']
})
export class StudentCreateJsonComponent implements OnInit {

  private createForm: FormGroup;

  private message;

  @Output()
  private create = new EventEmitter();

  constructor(private studentJsonService: StudentJsonService) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      address: new FormControl(),
      mark: new FormControl(),
      avatar: new FormControl(),
      status: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.createForm);

    if (this.createForm.invalid) {
      this.message = 'Please nhập tất cả các trường';
      return;
    } else {
      this.message = '';
    }


    this.studentJsonService.createStudent(this.createForm.value).toPromise()
      .then(data => {
        console.log(data);
        // Load lại danh sách student
        this.create.emit();
        this.createForm.reset();
      })
      .catch(err => console.log(err));

    // Ẩn Modal
    document.getElementById('close').click();

  }


}
