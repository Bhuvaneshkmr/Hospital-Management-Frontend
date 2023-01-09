import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAppointmentsComponent } from './active-appointments.component';

describe('ActiveAppointmentsComponent', () => {
  let component: ActiveAppointmentsComponent;
  let fixture: ComponentFixture<ActiveAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
