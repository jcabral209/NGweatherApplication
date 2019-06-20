import { Injectable } from '@angular/core';
import { DataService } from './data.service';

import { ISearchSpecs } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';
import { SearchForStateService } from './search-for-state.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SearchForCityService {
  private searchData: any;
  private urlSearch = 'find?q=';
  private sData: ISearchSpecs[] = [];

  constructor(private dataService: DataService,
              private findState: DataLatLonService,
              private searchForStateService: SearchForStateService) { }

  async getSearchData(city: string) {
    await this.dataService
      .getUrl(this.urlSearch + city)
      .toPromise()
      .then(data => {
        this.searchData = data;
      });
    // console.log('This is searchData FROM SEARCHFORCITY BEFORE STATE--###------+++===>>>', this.searchData);
    this.parseForecastData(this.searchData);
    return this.parseForecastData(this.searchData);
  }

  async parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);

    this.sData = [];
    for (const i of [...parseD.list]) {
      // console.log('This is i -->', i);

      const selectedState = await this.searchForStateService.getSearchState(i.coord.lon, i.coord.lat);
      // console.log('send State ++++++++++++++++++++++++++++', selectedState);

      const nfo: ISearchSpecs = {
        id: i.id,
        name: i.name,
        lon: i.coord.lon,
        lat: i.coord.lat,
        temp: i.main.temp,
        pressure: i.main.pressure,
        humidity: i.main.humidity,
        temp_min: i.main.temp_min,
        temp_max: i.main.temp_max,
        dt: i.dt,
        speed: i.wind.speed,
        deg: i.wind.deg,
        country: i.sys.country,
        rain: i.rain,
        snow: i.snow,
        main: i.weather[0].main,
        description: i.weather[0].description,
        icon: i.weather[0].icon,
        state: selectedState,
      };

      this.sData.push(nfo);
      // console.log('This is sDATA FROM SEARCH ForCITY-->', this.sData);
    }
    return this.sData;
  }
}
