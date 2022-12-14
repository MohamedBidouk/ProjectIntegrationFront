import {Component, OnInit} from '@angular/core';
import {MotherService} from "../../mother.service";
import {UploadFileService} from "../../upload-file.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Candidate} from "../model/candidate.model";
import {Father} from "../model/father.model";
import {Mother} from "../model/mother.model";
import {FatherService} from "../../father.service";
import {CandidateService} from "../service/candidate.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-passed-form',
  templateUrl: './add-passed-form.component.html',
  styleUrls: ['./add-passed-form.component.css']
})
export class AddPassedFormComponent implements OnInit{

  idCandidate!: number;
  candidate!: Candidate;
  father!: Father;
  mother!: Mother;

  fileInfos!: Observable<any>;
  fileInfosFather!: Observable<any>;
  fileInfosMother!: Observable<any>;

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

}
