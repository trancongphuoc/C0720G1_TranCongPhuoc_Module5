import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {IEmployee} from '../../../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employeeService.getAll().subscribe((data: IEmployee[]) => {
      this.employeeList = data;
    }, error => console.log(error));
  }

}
