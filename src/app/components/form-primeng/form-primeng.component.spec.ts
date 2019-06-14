import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrimengComponent } from './form-primeng.component';

describe('FormPrimengComponent', () => {
  let component: FormPrimengComponent;
  let fixture: ComponentFixture<FormPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
