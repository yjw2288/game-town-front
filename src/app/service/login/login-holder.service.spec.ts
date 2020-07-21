import { TestBed } from '@angular/core/testing';

import { LoginHolderService } from './login-holder.service';

describe('LoginHolderService', () => {
  let service: LoginHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
