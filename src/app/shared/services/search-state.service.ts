import { Injectable } from '@angular/core';
import { IState } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';


@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private searchState: IState[] = [];
  private inData: any;
  private urlLat: 37.96;  // Temp data
  private urlLon: -121.29;  // Temp data
  constructor(private dataService: DataLatLonService) { }

  async getSearchState(urlLon, urlLat) {
    await this.dataService
      .getUrlState(this.urlLat, this.urlLon)
      .toPromise()
      .then(stateInfo => {


        // console.log(searchData);
        this.inData = stateInfo;
        // console.log('This is stateState --###------+++===>>>', this.searchState);
      });
    // console.log('This is searchArray --****--+++====>>>', this.searchArray);
    this.parseStateData(this.inData);
    return this.parseStateData(this.inData);

  }
  parseStateData(parseD: any) {
    console.log('This is PARSED -->', parseD);

    for (const i of [...parseD.properties.address]) {
      console.log('This is i -->', i);
      const nfo: IState = {
        country: i.country,
        state: i.state,
      };
      this.searchState.push(nfo);
    }
    console.log('This is stateDATA -->', this.searchState);
    return this.searchState;
  }
}
