import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsForTodayComponent } from './appointments-for-today.component';

describe('AppointmentsForTodayComponent', () => {
  let component: AppointmentsForTodayComponent;
  let fixture: ComponentFixture<AppointmentsForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsForTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
