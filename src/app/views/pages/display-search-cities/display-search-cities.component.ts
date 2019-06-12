import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';
import { ISearchSpecs } from 'src/app/shared/interfaces/curr-specs';

@Component({
  selector: 'app-display-search-cities',
  templateUrl: './display-search-cities.component.html',
  styleUrls: ['./display-search-cities.component.css']
})
export class DisplaySearchCitiesComponent implements OnInit {

  sData: ISearchSpecs[] = [];
  list: any[] = [];
  city: string;

  constructor(private SService: SearchService) { }

  async ngOnInit() {
    this.city = 'Stockton, US';
    await this.SService.getSearchData(this.city).then(data => {
      console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;
      console.log('SearchDisplayComponent() SAYS Receiving DATA -->', this.sData);

    });
  }

}

