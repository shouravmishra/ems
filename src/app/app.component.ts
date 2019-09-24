import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: EmployeeService){}
  title = 'employee';
  emp_id
  emp_name
  emp_dept
  myemployee ={
    id:1,
    name: '',
    dept: ''
   }
  addEmployee(){
    this.myemployee.id = this.emp_id
    this.myemployee.name = this.emp_name
    this.myemployee.dept = this.emp_dept
    this.emp.setEmployee(this.myemployee)



  }
}
