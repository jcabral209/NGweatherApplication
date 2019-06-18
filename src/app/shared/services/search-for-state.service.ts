import { Injectable } from '@angular/core';
import { IState } from '../interfaces/curr-specs';
import { DataLatLonService } from './data-lat-lon.service';


@Injectable({
  providedIn: 'root'
})
export class SearchForStateService {

  private searchState: IState[] = [];
  private stateNameData: any;
  constructor(
    private dataLatLonService: DataLatLonService
    ) { }

  async getSearchState(urlLon, urlLat) {
    // console.log('In getSearchState', urlLat, urlLon);
    this.stateNameData = await this.dataLatLonService.getUrlState(urlLat, urlLon).toPromise();
    // console.log('This stateNameData' +
    // '**********************************************************************',
    // this.stateNameData);

    console.log('hhhhhhhhhhhhhhhhhhhhhh', this.stateNameData.features[0].properties.address.state);
    return this.stateNameData.features[0].properties.address.state;

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
