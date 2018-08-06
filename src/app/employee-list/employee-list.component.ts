import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList = []
    
 private service ;

  constructor(empService : EmployeeService) {
        this.service=empService;    
   }
  ngOnInit() {
  
    this.service.getList().subscribe(data => this.employeeList=data); 
  }

}
