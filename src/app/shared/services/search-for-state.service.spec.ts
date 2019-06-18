import { TestBed } from '@angular/core/testing';

import { SearchForStateService } from './search-for-state.service';

describe('SearchForStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchForStateService = TestBed.get(SearchForStateService);
    expect(service).toBeTruthy();
  });
});
