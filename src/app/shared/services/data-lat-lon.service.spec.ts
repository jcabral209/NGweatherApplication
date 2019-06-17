import { TestBed } from '@angular/core/testing';

import { DataLatLonService } from './data-lat-lon.service';

describe('DataLatLonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataLatLonService = TestBed.get(DataLatLonService);
    expect(service).toBeTruthy();
  });
});
