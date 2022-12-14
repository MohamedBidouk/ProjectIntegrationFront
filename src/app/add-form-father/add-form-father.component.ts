import {Component, Input, OnInit} from '@angular/core';
import {Father} from "../model/father.model";
import {Observable} from "rxjs";
import {FatherService} from "../../father.service";
import {UploadFileService} from "../../upload-file.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-form-father',
  templateUrl: './add-form-father.component.html',
  styleUrls: ['./add-form-father.component.css']
})
export class AddFormFatherComponent implements OnInit{
  @Input()
  fatherToAdd = new Father();
  fileInfos!: Observable<any>;
  currentFile!: File;
  selectedFiles!: FileList;
  idCand!: number;

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
  addedFatherId!: number;
  constructor(private fatherService: FatherService,
              private uploadService: UploadFileService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.idCand = this.activatedRoute.snapshot.params['idCandidate'];console.log(this.idCand);
  }

  onKey(event: any) {

    if( this.fatherToAdd.firstnameFather?.length!>0){
      this.p1 = 10;
    }else if(this.fatherToAdd.firstnameFather?.length! == 0){
      this.p1 = 0;
    }
    if( this.fatherToAdd.lastnameFather?.length!>0){
      this.p2 = 10;
    }else if(this.fatherToAdd.lastnameFather?.length! == 0){
      this.p2 = 0;
    }
    if( this.fatherToAdd.addressFather?.length!>0){
      this.p3 = 10;
    }else if(this.fatherToAdd.addressFather?.length! == 0){
      this.p3 = 0;
    }
    if( this.fatherToAdd.cityOfOriginFather?.length!>0){
      this.p4 = 10;
    }else if(this.fatherToAdd.cityOfOriginFather?.length! == 0){
      this.p4 = 0;
    }
    if( this.fatherToAdd.zipOfOriginFather?.length!>0){
      this.p5 = 10;
    }else if(this.fatherToAdd.zipOfOriginFather?.length! == 0){
      this.p5 = 0;
    }

    this.formProgress = this.p1+this.p2+this.p3+this.p4+this.p5;
  }
  addFather(){
    this.fatherService.addFather(this.fatherToAdd, this.idCand).
      subscribe({next:(value: Father) =>{
        this.addedFatherId = value.id!;
    }});
  }

  passToMotherForm(){
    this.router.navigate(['add-form-mother',this.idCand]);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFather(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.uploadFather(this.currentFile, this.addedFatherId!).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFilesFather(this.addedFatherId!);
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
