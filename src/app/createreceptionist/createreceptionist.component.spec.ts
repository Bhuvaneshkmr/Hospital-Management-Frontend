import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereceptionistComponent } from './createreceptionist.component';

describe('CreatereceptionistComponent', () => {
  let component: CreatereceptionistComponent;
  let fixture: ComponentFixture<CreatereceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
