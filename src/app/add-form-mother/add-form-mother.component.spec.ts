import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormMotherComponent } from './add-form-mother.component';

describe('AddFormMotherComponent', () => {
  let component: AddFormMotherComponent;
  let fixture: ComponentFixture<AddFormMotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormMotherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
