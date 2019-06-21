import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SearchForCityService } from './shared/services/searchForCity.service';
import { ISearchSpecs, IWeather, IForecast } from './shared/interfaces/curr-specs';
import { CurrWeatherService } from './shared/services/curr-weather.service';
import { ForecastService } from './shared/services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sData: ISearchSpecs[] = [];
  wData: IWeather[] = [];
  fData: IForecast[] = [];
  cityToShow: any;
  display = true;
  // tslint:disable-next-line:typedef-whitespace
  ifShow = true;
  title = 'CSA Weather Application';

  constructor(private lookForCity: SearchForCityService,
              private search4CityByIdCurrWeather: CurrWeatherService,
              private toForecastS: ForecastService) { }

  toggleSideBar(): void {
    this.display = !this.display;
  }

  searchForCity(city) {
    this.lookForCity.getSearchData(city);
    this.lookForCity.getSearchData(city).then(data => {

      // console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;

      // this.filterState();
      // console.log('FROM APP COMPONENT() SAYS Receiving DATA -->', this.sData);

    });
  }

  searchForCityById(cityId) {
    this.search4CityByIdCurrWeather.searchCityById(cityId);
    this.search4CityByIdCurrWeather.searchCityById(cityId).then(data => {

    });
  }

  getForecastById(cityId) {
    this.toForecastS.getForecastById(cityId);
    this.toForecastS.getForecastById(cityId).then(data => {

      this.fData = data;
    });
  }

  setCityValue(cityValue) {
    console.log('I am running');
    this.display = false;
    this.cityToShow = cityValue;
    console.log(this.cityToShow);
  }

}
