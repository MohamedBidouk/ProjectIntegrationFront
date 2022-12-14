import { Injectable } from '@angular/core';
import {Father} from "./app/model/father.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FatherService {
  apiURL: string= "http://localhost:8080/integration-project/api";
  father!: Father;
  constructor(private http: HttpClient) { }
  consultFather(idCandidate: number):Observable<Father>{
    return this.http.get<Father>(this.apiURL+"/candidate/"+idCandidate+"/father");
  }
  addFather(father: Father, idCandidate: number):Observable<Father>{
    return this.http.post<Father>(this.apiURL+"/candidate/"+idCandidate+"/father", father)
  }
}
