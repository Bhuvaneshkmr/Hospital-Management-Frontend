import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingpatientComponent } from './existingpatient.component';

describe('ExistingpatientComponent', () => {
  let component: ExistingpatientComponent;
  let fixture: ComponentFixture<ExistingpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
