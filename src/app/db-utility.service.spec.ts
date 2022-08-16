import { TestBed } from '@angular/core/testing';

import { DbUtilityService } from './db-utility.service';

describe('DbUtilityService', () => {
  let service: DbUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
