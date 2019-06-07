import { TestBed } from '@angular/core/testing';

import { CurrWeatherService } from './curr-weather.service';

describe('CurrWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrWeatherService = TestBed.get(CurrWeatherService);
    expect(service).toBeTruthy();
  });
});
