import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormFatherComponent } from './add-form-father.component';

describe('AddFormFatherComponent', () => {
  let component: AddFormFatherComponent;
  let fixture: ComponentFixture<AddFormFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormFatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
