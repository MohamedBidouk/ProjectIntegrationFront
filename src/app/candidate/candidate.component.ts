import {Component, OnInit} from '@angular/core';
import {Candidate} from "../model/candidate.model";
import {CandidateService} from "../service/candidate.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit{
  candidates!: Candidate[];

  constructor(private candidateService: CandidateService,
              public authService: AuthService) {
  }
  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(){
    this.candidateService.listCandidate().subscribe(cands =>{
      console.log(cands);
      this.candidates = cands;
    })
  }

}
