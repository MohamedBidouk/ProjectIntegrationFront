import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mother} from "./app/model/mother.model";

@Injectable({
  providedIn: 'root'
})
export class MotherService {

  apiURL: string= "http://localhost:8080/integration-project/api";
  Mother!: Mother;
  constructor(private http: HttpClient) { }

  consultMother(idCandidate: number):Observable<Mother>{
    return this.http.get<Mother>(this.apiURL+"/candidate/"+idCandidate+"/mother");
  }
  addMother(Mother: Mother, idCandidate: number):Observable<Mother>{
    return this.http.post<Mother>(this.apiURL+"/candidate/"+idCandidate+"/mother", Mother)
  }
}
