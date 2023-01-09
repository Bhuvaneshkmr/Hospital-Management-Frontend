import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPatientByReceptionistComponent } from './list-of-patient-by-receptionist.component';

describe('ListOfPatientByReceptionistComponent', () => {
  let component: ListOfPatientByReceptionistComponent;
  let fixture: ComponentFixture<ListOfPatientByReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPatientByReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPatientByReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
