import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from "../model/candidate.model";
import {CandidateService} from "../service/candidate.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UploadFileService} from "../../upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-form-candidate',
  templateUrl: './add-form-candidate.component.html',
  styleUrls: ['./add-form-candidate.component.css']
})
export class AddFormCandidateComponent implements OnInit{

  @Input()
  candidate= new Candidate();
  selectedFiles!: FileList;
  currentFile!: File;
  p6 = 0;
  p7 = 0;
  p8 = 0;
  p1 = 0;
  p4 = 0;
  p5 = 0;
  p2 = 0;
  p3 = 0;
  p9= 0;
  p10= 0;
  p11= 0;
  formProgress = 0;
  progress = 0;
  message = '';

  isAdded: boolean = false;
  addedCandidate!: Observable<Candidate>;
  addedCandidateId : number = 0;
  fileInfos!: Observable<any>;

  listOfStates: String[]= ["Nabeul", "Tunis", "Ariana", "Manouba"];
  listOfGender: String[]= ["Male", "Female"];
  constructor(private candidateService: CandidateService,
              private uploadService: UploadFileService,
              private router: Router) {
  }
  ngOnInit(): void {
  }
  onKey(event: any) {

    if( this.candidate.firstname?.length!>0){
      this.p1 = 10;
    }else if(this.candidate.firstname?.length! == 0){
      this.p1 = 0;
    }
    if( this.candidate.lastname?.length!>0){
      this.p2 = 10;
    }else if(this.candidate.lastname?.length! == 0){
      this.p2 = 0;
    }
    if( this.candidate.address?.length!>0){
      this.p3 = 10;
    }else if(this.candidate.address?.length! == 0){
      this.p3 = 0;
    }
    if( this.candidate.cityOfOrigin?.length!>0){
      this.p4 = 10;
    }else if(this.candidate.cityOfOrigin?.length! == 0){
      this.p4 = 0;
    }
    if( this.candidate.zipOfOrigin?.length!>0){
      this.p5 = 10;
    }else if(this.candidate.zipOfOrigin?.length! == 0){
      this.p5 = 0;
    }
    if( this.candidate.cityOfStudy?.length!>0){
      this.p6 = 10;
    }else if(this.candidate.cityOfStudy?.length! == 0){
      this.p6 = 0;
    }
    if( this.candidate.zipOfStudy?.length!>0){
      this.p7 = 10;
    }else if(this.candidate.zipOfStudy?.length! == 0){
      this.p7 = 0;
    }
    if( this.candidate.stateOfStudy?.length!>0){
      this.p8 = 10;
    }else if(this.candidate.stateOfStudy?.length! == 0){
      this.p8 = 0;
    }
    if( this.candidate.stateOfOrigin?.length!>0){
      this.p9 = 10;
    }else if(this.candidate.stateOfOrigin?.length! == 0){
      this.p9 = 0;
    }
    if( this.candidate.status?.length!>0){
      this.p10 = 10;
    }else if(this.candidate.status?.length! == 0){
      this.p10 = 0;
    }
    if( this.candidate.sexe?.length!>0){
      this.p11 = 10;
    }else if(this.candidate.sexe?.length! == 0){
      this.p11 = 0;
    }
    this.formProgress = this.p1+this.p2+this.p3+this.p4+this.p6+this.p7+this.p8+this.p9+this.p10+this.p11;
  }

  addCandidate(){
    this.candidateService.addCandidate(this.candidate).
      subscribe({ next:(value:Candidate) =>{
        this.isAdded = true;
        this.addedCandidateId = value.id!;
        this.formProgress = 0;
    }});
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile, this.addedCandidateId!).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles(this.addedCandidateId!);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

          }
        });
      }

    }
  }

}
