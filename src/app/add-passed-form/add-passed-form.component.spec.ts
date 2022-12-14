import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassedFormComponent } from './add-passed-form.component';

describe('AddPassedFormComponent', () => {
  let component: AddPassedFormComponent;
  let fixture: ComponentFixture<AddPassedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPassedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
