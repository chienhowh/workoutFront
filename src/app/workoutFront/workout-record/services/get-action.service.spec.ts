import { TestBed } from '@angular/core/testing';

import { GetActionService } from './get-action.service';

describe('GetActionService', () => {
  let service: GetActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
