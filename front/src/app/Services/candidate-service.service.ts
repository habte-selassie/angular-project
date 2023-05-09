import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import Candidate from '../Model/Candidate';
import { ICandidate } from '../Model/Candidate';
@Injectable({
  providedIn: 'root'
})

export class CandidateServiceService {
  
private apiUrl = 'api/candidate';// API endpoint for the candidate


  constructor(private http:HttpClient) { }

  /// to get all candidates 
  getCandidates():Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.apiUrl)
  }


 ///to get a signle candidate
  getCandidate(id:number):Observable<Candidate>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Candidate>(url)
  }
   
  //// to create a candidate 
  createCandidate(candidate:Candidate):Observable<Candidate>{
    return this.http.post<Candidate>(this.apiUrl,candidate)
  }
   
    updateCandidate(candidate:Candidate):Observable<Candidate>{
      const url = `${this.apiUrl}/${candidate.id}`
      return this.http.put<Candidate>(url,candidate)
    }

    deleteCandidate(candidate:Candidate):Observable<Candidate>{
      const url = `${this.apiUrl}/${candidate.id}`
      return this.http.delete<Candidate>(url)
    }
}
