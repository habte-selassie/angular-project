import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


export interface CandidateElement {
  name : String
  age : Number
  email : String
  position: Number
  department : String
  experience : Number
  designation : String
  skills : String
  salary : String
  contact : String
  address : String
}

const CANDIDATE_DATA: CandidateElement[] = [
 
    { position:1, name: 'John', age: 30, email: 'john@example.com', department: 'HR', experience: 5, designation: 'HR Manager', skills: 'Communication, HR', salary: '$50,000', contact: '1234567890', address: 'New York' },
    { position:2, name: 'Lisa', age: 35, email: 'lisa@example.com', department: 'Sales', experience: 8, designation: 'Sales Manager', skills: 'Sales, Negotiation', salary: '$60,000', contact: '9876543210', address: 'Los Angeles' },
    { position:3, name: 'Sarah', age: 28, email: 'sarah@example.com', department: 'Marketing', experience: 3, designation: 'Marketing Executive', skills: 'Marketing Strategy', salary: '$45,000', contact: '4567890123', address: 'Chicago' },
    { position:4, name: 'Mark', age: 32, email: 'mark@example.com', department: 'IT', experience: 6, designation: 'Senior Developer', skills: 'Programming, Linux', salary: '$55,000', contact: '7890123456', address: 'San Francisco' },
    { position:5, name: 'Emma', age: 27, email: 'emma@example.com', department: 'Finance', experience: 4, designation: 'Financial Analyst', skills: 'Financial Analysis', salary: '$65,000', contact: '2345678901', address: 'Seattle' }
  ]
  



@Component({
  selector: 'app-read-candidate',
  templateUrl: './read-candidate.component.html',
  styleUrls: ['./read-candidate.component.css']
})
export class ReadCandidateComponent {

  // displayedColumns: string[] = ['position', 'name', 'age' , 'email', 'departement', 'designation', 'skills' , 'experience' , 'salary' , 'contact' , 'address']
  // data: string[] = ['position', 'name', 'age' , 'email', 'departement', 'designation', 'skills' , 'experience' , 'salary' , 'contact' , 'address']

  // displayedColumns: string[] = ['position', 'name', 'age' , 'email', 'departement', 'designation', 'skills' , 'experience' , 'salary' , 'contact' , 'address'];
  //  data = CANDIDATE_DATA;

  displayedColumns: string[] = ['position', 'name', 'age', 'email', 'department', 'designation', 'skills', 'experience', 'salary', 'contact', 'address','actions'];

  dataSource: any[] = [
    { position: 1, name: 'John Doe', age: 30, email: 'johndoe@example.com', department: 'IT', designation: 'Software Engineer', skills: 'Angular, TypeScript', experience: '5 years', salary: '$100,000', contact: '123-456-7890', address: '123 ABC Street' },
    // Add more data objects as needed
  ]


}
