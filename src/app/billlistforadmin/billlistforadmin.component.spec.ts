import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilllistforadminComponent } from './billlistforadmin.component';

describe('BilllistforadminComponent', () => {
  let component: BilllistforadminComponent;
  let fixture: ComponentFixture<BilllistforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilllistforadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilllistforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
