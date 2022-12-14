import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {CandidateComponent} from "./candidate/candidate.component";
import {AddFormCandidateComponent} from "./add-form-candidate/add-form-candidate.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: "candidates", component: CandidateComponent},
  {path: "add-formCandidate", component: AddFormCandidateComponent},
  {path: "", redirectTo: "candidates", pathMatch: "full" },
  {path: "login", component: LoginComponent},
  {path: "add-form-cand", component: AddFormCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
