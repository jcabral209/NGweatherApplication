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

import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './views/pages/search-bar/search-bar.component';
import { DisplayBarComponent } from './views/pages/display-bar/display-bar.component';
import { ForecastDisplayComponent } from './views/pages/forecast-display/forecast-display.component';
import { DisplaySearchCitiesComponent } from './views/pages/display-search-cities/display-search-cities.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrDetailComponent,
    SearchBarComponent,
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SidebarModule]
})
export class AppModule { }
