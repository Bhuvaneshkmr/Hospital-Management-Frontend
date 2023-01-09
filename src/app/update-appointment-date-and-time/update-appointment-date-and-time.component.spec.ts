import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentDateAndTimeComponent } from './update-appointment-date-and-time.component';

describe('UpdateAppointmentDateAndTimeComponent', () => {
  let component: UpdateAppointmentDateAndTimeComponent;
  let fixture: ComponentFixture<UpdateAppointmentDateAndTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentDateAndTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointmentDateAndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
