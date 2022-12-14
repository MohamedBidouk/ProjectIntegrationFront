import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPassedFormComponent } from './modify-passed-form.component';

describe('ModifyPassedFormComponent', () => {
  let component: ModifyPassedFormComponent;
  let fixture: ComponentFixture<ModifyPassedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPassedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPassedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
