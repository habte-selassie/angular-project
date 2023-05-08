import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Department from '../Model/Department';
import { ICompany } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})

export class DepartmentServiceService {

  private apiUrl = 'api/companies'

  constructor(private http:HttpClient) { }

 
   /////////// to get all of the companys
  getComapanys():Observable<Company>{
    return this.http.get<Company[]>(this.apiUrl)
  }

  ////// to get a signle company
  getCompany(id:Number):Observable<Company>{
    const url =  `${this.apiUrl}/{id}`
    return this.http.get<Company>(url)
  }

  /// to ceate a company 
  createCompany(company:Company):Observable<Company>{
    return this.http.post<Company>(this.apiUrl,company)
  }

  /// use to update a company 
  updateCompany(company:Company):Observable<Company>{
     const url = `${this.apiUrl}/${company.id}`
     return this.http.put<Company>(url,company)
  }

  ////////// to delete a specific company
  deleteCompany(company:Company):Observable<Company>{
   const url = `${this.apiUrl}/${company.id}`
   return this.http.delete<Company>(url)
  }

}
