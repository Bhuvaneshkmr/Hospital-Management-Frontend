import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadByPatientNameComponent } from './read-by-patient-name.component';

describe('ReadByPatientNameComponent', () => {
  let component: ReadByPatientNameComponent;
  let fixture: ComponentFixture<ReadByPatientNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadByPatientNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadByPatientNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
