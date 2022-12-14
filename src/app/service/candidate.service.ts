import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidate} from "../model/candidate.model";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  apiURL: string= "http://localhost:8080/integration-project/api";
  candidates!: Candidate[];
  candidate!: Candidate;

  constructor(private http : HttpClient) { }

  listCandidate():Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiURL+"/all");
  }

  addCandidate( cand: Candidate): Observable<Candidate>{
    return this.http.post<Candidate>(this.apiURL, cand)
  }

  deleteCandidate(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }

  consultCandidate(id:number): Observable<Candidate>{
    const url = `${this.apiURL}/${id}`;

    return this.http.get<Candidate>(url);
  }


}
