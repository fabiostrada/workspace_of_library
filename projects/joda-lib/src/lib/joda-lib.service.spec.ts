import { TestBed } from '@angular/core/testing';

import { JodaLibService } from './joda-lib.service';

describe('JodaLibService', () => {
  let service: JodaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JodaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
