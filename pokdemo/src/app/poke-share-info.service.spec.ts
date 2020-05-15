import { TestBed } from '@angular/core/testing';

import { PokeShareInfoService } from './poke-share-info.service';

describe('PokeShareInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeShareInfoService = TestBed.get(PokeShareInfoService);
    expect(service).toBeTruthy();
  });
});
