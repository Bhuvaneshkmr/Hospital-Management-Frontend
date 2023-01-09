import { TestBed } from '@angular/core/testing';

import { ReceptionistserviceService } from './receptionistservice.service';

describe('ReceptionistserviceService', () => {
  let service: ReceptionistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
