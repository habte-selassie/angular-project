import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeModel } from '../model/employee.ts.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService implements InMemoryDbService {

  createDb() {
    const employees: EmployeeModel[] = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com', department: 'IT' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', department: 'HR' },
      { id: 3, name: 'David Johnson', email: 'davidjohnson@example.com', department: 'Finance' }
    ];

    return { employees };
  }

  genId(employees: EmployeeModel[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }
}
