import { Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  displayedColumns: string[] = ['position', 'name', 'age', 'email', 'department', 'designation', 'skills', 'experience', 'salary', 'contact', 'address','actions'];

  dataSource: any[] = [
    { position: 1, name: 'John Doe', age: 30, email: 'johndoe@example.com', department: 'IT', designation: 'Software Engineer', skills: 'Angular, TypeScript', experience: '5 years', salary: '$100,000', contact: '123-456-7890', address: '123 ABC Street' },
    // Add more data objects as needed
  ]
}
