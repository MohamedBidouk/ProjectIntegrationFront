import {Component, Input, OnInit} from '@angular/core';
import {Mother} from "../model/mother.model";
import {Observable} from "rxjs";
import {UploadFileService} from "../../upload-file.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MotherService} from "../../mother.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-form-mother',
  templateUrl: './add-form-mother.component.html',
  styleUrls: ['./add-form-mother.component.css']
})
export class AddFormMotherComponent implements OnInit{

  @Input()
  motherToAdd = new Mother();
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
  addedMotherId!: number;

  constructor(private motherService: MotherService,
              private uploadService: UploadFileService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idCand = this.activatedRoute.snapshot.params['idCandidate'];console.log(this.idCand);
  }

  onKey(event: any) {

    if( this.motherToAdd.firstnameMother?.length!>0){
      this.p1 = 10;
    }else if(this.motherToAdd.firstnameMother?.length! == 0){
      this.p1 = 0;
    }
    if( this.motherToAdd.lastnameMother?.length!>0){
      this.p2 = 10;
    }else if(this.motherToAdd.lastnameMother?.length! == 0){
      this.p2 = 0;
    }
    if( this.motherToAdd.addressMother?.length!>0){
      this.p3 = 10;
    }else if(this.motherToAdd.addressMother?.length! == 0){
      this.p3 = 0;
    }
    if( this.motherToAdd.cityOfOriginMother?.length!>0){
      this.p4 = 10;
    }else if(this.motherToAdd.cityOfOriginMother?.length! == 0){
      this.p4 = 0;
    }
    if( this.motherToAdd.zipOfOriginMother?.length!>0){
      this.p5 = 10;
    }else if(this.motherToAdd.zipOfOriginMother?.length! == 0){
      this.p5 = 0;
    }

    this.formProgress = this.p1+this.p2+this.p3+this.p4+this.p5;
  }
  addMother(){
    this.motherService.addMother(this.motherToAdd, this.idCand).
    subscribe({next:(value: Mother) =>{
        this.addedMotherId = value.id!;
      }});
  }



  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadMother(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.uploadMother(this.currentFile, this.addedMotherId!).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFilesMother(this.addedMotherId!);
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
