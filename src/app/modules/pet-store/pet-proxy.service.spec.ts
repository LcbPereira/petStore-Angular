import { TestBed } from '@angular/core/testing';

import { PetProxyService } from './pet-proxy.service';

describe('PetProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetProxyService = TestBed.get(PetProxyService);
    expect(service).toBeTruthy();
  });
});
