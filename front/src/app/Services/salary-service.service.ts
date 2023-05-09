import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Salary from '../Model/Salary';
import ISalary  from '../Model/Salary'

@Injectable({
  providedIn: 'root'
})
export class SalaryServiceService {

  private apiUrl = 'api/salarys'

  constructor(private http:HttpClient) { }

  /////////// to get all of the employees salary
  getSalarys():Observable<Salary>{
    return this.http.get<Salary[]>(this.apiUrl)
  }

  ////// to get a signle employee salary
  getSalary(id:Number):Observable<Salary>{
    const url =  `${this.apiUrl}/{id}`
    return this.http.get<Salary>(url)
  }

  /// to ceate an employee salary
  createSalary(salary:Salary):Observable<Salary>{
    return this.http.post<Salary>(this.apiUrl,salary)
  }

  /// use to update an employee salary
  updateSalary(salary:Salary):Observable<Salary>{
     const url = `${this.apiUrl}/${salary.id}`
     return this.http.put<Salary>(url,salary)
  }

  ////////// to delete a specific employee salary
  deleteSalary(salary:Salary):Observable<Salary>{
   const url = `${this.apiUrl}/${salary.id}`
   return this.http.delete<Salary>(url)
  }
}
