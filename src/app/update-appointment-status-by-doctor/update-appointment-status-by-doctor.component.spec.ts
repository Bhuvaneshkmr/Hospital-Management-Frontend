import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentStatusByDoctorComponent } from './update-appointment-status-by-doctor.component';

describe('UpdateAppointmentStatusByDoctorComponent', () => {
  let component: UpdateAppointmentStatusByDoctorComponent;
  let fixture: ComponentFixture<UpdateAppointmentStatusByDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentStatusByDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointmentStatusByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
