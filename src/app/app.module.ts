import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from "@angular/forms";
import { CandidateComponent } from './candidate/candidate.component';
import { AppRoutingModule } from './app-routing.module';
import { AddFormCandidateComponent } from './add-form-candidate/add-form-candidate.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./service/token.interceptor";
import { LoginComponent } from './login/login.component';
import { AddFormFatherComponent } from './add-form-father/add-form-father.component';
import { AddFormMotherComponent } from './add-form-mother/add-form-mother.component';
import { AddPassedFormComponent } from './add-passed-form/add-passed-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CandidateComponent,
    AddFormCandidateComponent,
    LoginComponent,
    AddFormFatherComponent,
    AddFormMotherComponent,
    AddPassedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
