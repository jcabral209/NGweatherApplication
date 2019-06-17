import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

import { ISearchSpecs } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchData: any;
  private wData: ISearchSpecs;
  private urlSearch = 'find?q=';


  private sData: ISearchSpecs[] = [];
  private searchCitiesToDisplay: any;

  constructor(private dataService: DataService,
              private stateService: DataLatLonService) { }
  async getSearchData(city: string) {
    await this.dataService
      .getUrl(this.urlSearch + city)
      .toPromise()
      .then(data => {


        // console.log(data);
        this.searchData = data;
        // console.log('This is searchData --###------+++===>>>', this.searchData);
      });
    // console.log('This is searchData --****--+++====>>>', this.searchData);
    this.parseForecastData(this.searchData);
    return this.parseForecastData(this.searchData);
  }
  parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);

    // let myDate = new Date( your epoch date *1000);

    for (const i of [...parseD.list]) {
      // console.log('This is i -->', i);
      // const myDate = new Date(i.dt * 1000);
      // i.dt = myDate.toDateString(); ///////////////////
      // parseD.city.timezone = myDate.getHours();
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

        // getSearchState(nfo.lon, nfo.lat),
           // forEach(function(nfo) { nfo.state = ' '; }),
      };

      this.sData.push(nfo);
    }
    return this.sData;

    // console.log('This is sDATA -->', this.sData);


    //   getCitiesToDisplay() {

    //     // tslint:disable-next-line: only-arrow-functions
    //     const States = _.groupBy(this.sData, function (state) { return state.state; });
    //     // Group objective array by dates
    //     // console.log('States: ', state);
    //     const distinctDates = Object.keys(states);

    //     // console.log('Distinct States: ', distinctStates);
    //     // Change array to an Objective array

    //     for (let i = 0; i <= distinctStates.length - 1; i++) {
    //       // const currentDateArray = States[distinctStates[i]];

    //       const maxTempForAGivenDay = _.maxBy(_.filter(this.sData,
    //         // tslint:disable-next-line: only-arrow-functions
    //         function (state) { return state.state === distinctaStates[i]; }),
    //         // tslint:disable-next-line: only-arrow-functions
    //         function (state) { return state.temp_max; });
    //       // Filter the max_temp per day
    //       // console.log('Maximum Temp is: ', maxTempForAGivenDay);

    //       this.searchCitiesToDisplay.push(maxTempForAGivenDay);
    //     }
    //     // console.log('This is the FIVE DAYS display ==================>>>>', this.searchCitiesToDisplay);
    //   }

  }
}
