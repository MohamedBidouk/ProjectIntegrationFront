import {Component, OnInit} from '@angular/core';
import {Candidate} from "../model/candidate.model";
import {Father} from "../model/father.model";
import {Mother} from "../model/mother.model";
import {Observable} from "rxjs";
import {MotherService} from "../../mother.service";
import {FatherService} from "../../father.service";
import {CandidateService} from "../service/candidate.service";
import {UploadFileService} from "../../upload-file.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modify-passed-form',
  templateUrl: './modify-passed-form.component.html',
  styleUrls: ['./modify-passed-form.component.css']
})
export class ModifyPassedFormComponent implements OnInit{

  selectedFiles!: FileList;
  currentFile!: File;
  idCandidate!: number;
  candidate!: Candidate;
  father!: Father;
  mother!: Mother;

  fileInfos!: Observable<any>;
  fileInfosFather!: Observable<any>;
  fileInfosMother!: Observable<any>;
  listOfStates: String[]= ["Nabeul", "Tunis", "Ariana", "Manouba"];
  listOfGender: String[]= ["Male", "Female"];


  p1 = 0;
  p4 = 0;
  p5 = 0;
  p2 = 0;
  p3 = 0;
  p9= 0;

  formProgress = 0;
  progress = 0;
  message = '';

  isAdded: boolean = false;

  constructor(private motherService: MotherService,
              private fatherService: FatherService,
              private candidateService: CandidateService,
              private uploadService: UploadFileService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.idCandidate = this.activatedRoute.snapshot.params['idCandidate'];console.log(this.idCandidate);
    this.candidateService.consultCandidate(this.activatedRoute.snapshot.params['idCandidate'])
      .subscribe({next:(value : Candidate)=>{
          this.candidate = value;console.log(this.candidate);
        }});
    this.fatherService.consultFather(this.activatedRoute.snapshot.params['idCandidate'])
      .subscribe({next:(value: Father) =>{
          this.father=value;console.log(value);
        }});
    this.motherService.consultMother(this.activatedRoute.snapshot.params['idCandidate'])
      .subscribe({next:(value: Mother)=>{
          this.mother = value;console.log(value);
        }});
    this.fileInfos = this.uploadService.getFiles(this.activatedRoute.snapshot.params['idCandidate']);
    this.fileInfosFather = this.uploadService.getFilesFather(this.activatedRoute.snapshot.params['idCandidate']);
    this.fileInfosMother = this.uploadService.getFilesMother(this.activatedRoute.snapshot.params['idCandidate']);
  }
  onKey(event: any) {

    if( this.father.firstnameFather?.length!>0){
      this.p1 = 10;
    }else if(this.father.firstnameFather?.length! == 0){
      this.p1 = 0;
    }
    if( this.father.lastnameFather?.length!>0){
      this.p2 = 10;
    }else if(this.father.lastnameFather?.length! == 0){
      this.p2 = 0;
    }
    if( this.father.addressFather?.length!>0){
      this.p3 = 10;
    }else if(this.father.addressFather?.length! == 0){
      this.p3 = 0;
    }
    if( this.father.cityOfOriginFather?.length!>0){
      this.p4 = 10;
    }else if(this.father.cityOfOriginFather?.length! == 0){
      this.p4 = 0;
    }
    if( this.father.zipOfOriginFather?.length!>0){
      this.p5 = 10;
    }else if(this.father.zipOfOriginFather?.length! == 0){
      this.p5 = 0;
    }

    this.formProgress = this.p1+this.p2+this.p3+this.p4+this.p5;
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  updateFather(){

  }
}
