import { TestBed } from '@angular/core/testing';

import { RiotService } from './riot.service';

describe('RiotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiotService = TestBed.get(RiotService);
    expect(service).toBeTruthy();
  });
});
