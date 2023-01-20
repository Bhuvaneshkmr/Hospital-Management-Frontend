import { TestBed } from '@angular/core/testing';

import { ReceptionistguardGuard } from './receptionistguard.guard';

describe('ReceptionistguardGuard', () => {
  let guard: ReceptionistguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceptionistguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
