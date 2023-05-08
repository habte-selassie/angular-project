import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import Company from '../Model/Company';
import { ICompany } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})

export class CompanyServiceService {
  
private apiUrl = 'api/company';// API endpoint for the candidate


  constructor(private http:HttpClient) { }

  /// to get all candidates 
  getCandidates():Observable<Company[]>{
    return this.http.get<Company[]>(this.apiUrl)
  }


 ///to get a signle Company
  getCompany(id:number):Observable<Company>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Company>(url)
  }
   
  //// to create a Company 
  createCompany(company:Company):Observable<Company>{
    return this.http.post<Company>(this.apiUrl,company)
  }
   
    updateCompany(company:Company):Observable<Company>{
      const url = `${this.apiUrl}/${company.id}`
      return this.http.put<Company>(url,company)
    }

    deleteCompany(company:Company):Observable<Company>{
      const url = `${this.apiUrl}/${company.id}`
      return this.http.delete<Company>(url)
    }
}
