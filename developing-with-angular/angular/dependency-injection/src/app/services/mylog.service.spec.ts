import { TestBed } from '@angular/core/testing';

import { MylogService } from './mylog.service';

describe('MylogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MylogService = TestBed.get(MylogService);
    expect(service).toBeTruthy();
  });
});
