import { TestBed } from '@angular/core/testing';

import { ClickCounterService } from './click-counter.service';

describe('ClickCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickCounterService = TestBed.get(ClickCounterService);
    expect(service).toBeTruthy();
  });
});
