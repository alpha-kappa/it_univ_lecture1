import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BySchematicComponent } from './by-schematic.component';

describe('BySchematicComponent', () => {
  let component: BySchematicComponent;
  let fixture: ComponentFixture<BySchematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BySchematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BySchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
