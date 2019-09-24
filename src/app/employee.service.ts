import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    employeeDetail = [
    {id: 1, name: 'abc', dept: 'CSE' },
    {id: 2, name: 'def', dept: 'ME' },
    {id: 3, name: 'xyz', dept: 'CE' }
  ]

getEmployee() {
    return this.employeeDetail
}

setEmployee(emp){
    this.employeeDetail.push(emp)

}
}