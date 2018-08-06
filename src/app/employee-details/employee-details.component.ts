import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private employeeService

  public employeeDetails =[]

  constructor(service : EmployeeService) {
    this.employeeService=service
   }

  ngOnInit() {
    this.employeeService.getList().subscribe(data => this.employeeDetails=data); 
  }

}
