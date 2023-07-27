import { TestBed } from '@angular/core/testing';

import { AuthDisplayService } from './auth-display.service';

describe('AuthDisplayService', () => {
  let service: AuthDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
