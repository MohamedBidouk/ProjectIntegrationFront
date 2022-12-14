import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080/integration-project/candidate';
  private baseUrlFather = 'http://localhost:8080/integration-project/father';
  private baseUrlMother = 'http://localhost:8080/integration-project/mother';

  constructor(private http: HttpClient) { }

  upload(file: File, idCand: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/${idCand}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(idCand: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idCand}/filess`);
  }

  //Father
  uploadFather(file: File, idFather: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrlFather}/${idFather}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFilesFather(idFather: number): Observable<any> {
    return this.http.get(`${this.baseUrlFather}/${idFather}/filesFather`);
  }

  uploadMother(file: File, idMother: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrlMother}/${idMother}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFilesMother(idFather: number): Observable<any> {
    return this.http.get(`${this.baseUrlMother}/${idFather}/filesMother`);
  }
}
