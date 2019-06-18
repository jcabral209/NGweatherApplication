import { TestBed } from '@angular/core/testing';

import { SearchForCityService } from './searchForCity.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchForCityService = TestBed.get(SearchForCityService);
    expect(service).toBeTruthy();
  });
});
