import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrimeComponent } from './test-prime.component';

describe('TestPrimeComponent', () => {
  let component: TestPrimeComponent;
  let fixture: ComponentFixture<TestPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
