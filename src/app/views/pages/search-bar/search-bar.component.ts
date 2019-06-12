import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';
import { ISearchSpecs } from 'src/app/shared/interfaces/curr-specs';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  sData: ISearchSpecs[] = [];
  list: any[] = [];
  city: string;

  constructor(private SService: SearchService,
              private inputCity: CityService) { }

  async ngOnInit() {
    this.city = 'Lodi, US';
    await this.SService.getSearchData(this.city).then(data => {
      console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;
      console.log('SearchDisplayComponent() SAYS Receiving DATA -->', this.sData);

    });
  }

    addCity = (e: any, event: any) => {
      console.log(event);
      event.value = '';
      // this.api.sendCity(e);
      this.inputCity.sendCities(e);

    }
  }

