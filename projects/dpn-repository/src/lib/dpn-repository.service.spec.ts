import { TestBed } from '@angular/core/testing';

import { DpnRepositoryService } from './dpn-repository.service';

describe('DpnRepositoryService', () => {
  let service: DpnRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DpnRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
