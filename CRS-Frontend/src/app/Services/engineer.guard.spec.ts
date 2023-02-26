import { TestBed } from '@angular/core/testing';

import { EngineerGuard } from './engineer.guard';

describe('EngineerGuard', () => {
  let guard: EngineerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EngineerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
