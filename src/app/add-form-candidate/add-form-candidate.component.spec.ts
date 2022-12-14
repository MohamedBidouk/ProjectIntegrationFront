import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCandidateComponent } from './add-form-candidate.component';

describe('AddFormCandidateComponent', () => {
  let component: AddFormCandidateComponent;
  let fixture: ComponentFixture<AddFormCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
