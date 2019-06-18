import { Injectable } from '@angular/core';
import { DataService } from './data.service';

import { ISearchSpecs } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';
import { SearchForStateService } from './search-for-state.service';

@Injectable({
  providedIn: 'root'
})
export class SearchForCityService {
  private searchData: any;
  private wData: ISearchSpecs;
  private urlSearch = 'find?q=';
  private sData: ISearchSpecs[] = [];
  private searchCitiesToDisplay: any;
  searchStateService: any;

  constructor(private dataService: DataService,
              private findState: DataLatLonService,
              private searchForStateService: SearchForStateService) { }
  async getSearchData(city: string) {
    await this.dataService
      .getUrl(this.urlSearch + city)
      .toPromise()
      .then(data => {

        // console.log(data);
        this.searchData = data;
        console.log('This is searchData --###------+++===>>>', this.searchData);
      });
    // console.log('This is searchData --****--+++====>>>', this.searchData);
    this.parseForecastData(this.searchData);
    return this.parseForecastData(this.searchData);
  }
  async parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);

    // let myDate = new Date( your epoch date *1000);

    for (const i of [...parseD.list]) {
      // console.log('This is i -->', i);
      // const myDate = new Date(i.dt * 1000);
      // i.dt = myDate.toDateString(); ///////////////////
      // parseD.city.timezone = myDate.getHours();

      const selectedState = await this.searchForStateService.getSearchState(i.coord.lon, i.coord.lat);

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
      console.log('This is sDATA FROM SEARCH ForCITY-->', this.sData);
      console.log('This is sDATA FROM SEARCH ForCITY-->');
    }
    return this.sData;

  }

}
