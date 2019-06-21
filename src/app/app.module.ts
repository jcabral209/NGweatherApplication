import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrDetailComponent } from './views/pages/curr-detail/curr-detail.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CommonModule } from '@angular/common';
import { EnterCityBarComponent} from './views/pages/enter-city-bar/enter-city-bar.component';
import { DisplayBarComponent } from './views/pages/display-bar/display-bar.component';
import { ForecastDisplayComponent } from './views/pages/forecast-display/forecast-display.component';
import { DisplaySearchCitiesComponent } from './views/pages/display-search-cities/display-search-cities.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterCityBarComponent,
    CurrDetailComponent,
    DisplayBarComponent,
    ForecastDisplayComponent,
    DisplaySearchCitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    PanelModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    InputTextModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SidebarModule]
})
export class AppModule { }

