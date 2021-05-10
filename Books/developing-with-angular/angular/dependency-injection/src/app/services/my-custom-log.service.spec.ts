import { TestBed } from '@angular/core/testing';

import { MyCustomLogService } from './my-custom-log.service';

describe('MyCustomLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCustomLogService = TestBed.get(MyCustomLogService);
    expect(service).toBeTruthy();
  });
});
