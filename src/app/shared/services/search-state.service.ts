import { Injectable } from '@angular/core';
import { IState } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';


@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private searchState: IState[] = [];
  private inData: any;
  constructor(private dataService: DataLatLonService) { }

  async getSearchState(urlLon, urlLat) {
    this.inData = await this.dataService
      .getUrlState(urlLat, urlLon)
      .toPromise();
    return this.inData.feautures[0].properties.address.state;
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
