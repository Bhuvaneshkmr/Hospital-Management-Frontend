import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAppointmentsByDoctorComponent } from './active-appointments-by-doctor.component';

describe('ActiveAppointmentsByDoctorComponent', () => {
  let component: ActiveAppointmentsByDoctorComponent;
  let fixture: ComponentFixture<ActiveAppointmentsByDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAppointmentsByDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAppointmentsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
