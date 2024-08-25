import { TestBed } from '@angular/core/testing';

import { LaravelService } from './laravel-service.service';

describe('LaravelServiceService', () => {
  let service: LaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
