import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {CandidateComponent} from "./candidate/candidate.component";
import {AddFormCandidateComponent} from "./add-form-candidate/add-form-candidate.component";
import {LoginComponent} from "./login/login.component";
import {AddFormFatherComponent} from "./add-form-father/add-form-father.component";
import {AddFormMotherComponent} from "./add-form-mother/add-form-mother.component";
import {AddPassedFormComponent} from "./add-passed-form/add-passed-form.component";

const routes: Routes = [
  {path: "candidates", component: CandidateComponent},
  {path: "add-formCandidate", component: AddFormCandidateComponent},
  {path: "", redirectTo: "candidates", pathMatch: "full" },
  {path: "login", component: LoginComponent},
  {path: "add-form-cand", component: AddFormCandidateComponent},
  {path: "add-form-father/:idCandidate", component: AddFormFatherComponent},
  {path: "add-form-mother/:idCandidate", component:AddFormMotherComponent},
  {path: "add-pass-form/:idCandidate", component:AddPassedFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
