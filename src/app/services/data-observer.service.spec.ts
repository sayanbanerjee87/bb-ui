import { TestBed } from '@angular/core/testing';

import { DataObserverService } from './data-observer.service';

describe('DataObserverService', () => {
  let service: DataObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
