import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorspecialitylistComponent } from './doctorspecialitylist.component';

describe('DoctorspecialitylistComponent', () => {
  let component: DoctorspecialitylistComponent;
  let fixture: ComponentFixture<DoctorspecialitylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorspecialitylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorspecialitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
