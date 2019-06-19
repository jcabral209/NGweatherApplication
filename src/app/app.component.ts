import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SearchForCityService } from './shared/services/searchForCity.service';
import { ISearchSpecs } from './shared/interfaces/curr-specs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sData: ISearchSpecs[] = [];

  display = true;
  // tslint:disable-next-line:typedef-whitespace
  ifShow : boolean = true;
  title = 'CSA Weather Application';

  constructor(private lookForCity: SearchForCityService ) { }

  toggleSideBar(): void {
    this.display = !this.display;
  }

  searchForCity(city) {
    this.lookForCity.getSearchData(city);
    this.lookForCity.getSearchData(city).then(data => {

      console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;

      // this.filterState();
      console.log('FROM APP COMPONENT() SAYS Receiving DATA -->', this.sData);

    });
  }
}
