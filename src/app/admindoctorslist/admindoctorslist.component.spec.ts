import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorslistComponent } from './admindoctorslist.component';

describe('AdmindoctorslistComponent', () => {
  let component: AdmindoctorslistComponent;
  let fixture: ComponentFixture<AdmindoctorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindoctorslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindoctorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
