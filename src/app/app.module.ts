import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './views/pages/launch/launch.component';
import { CurrDetailComponent } from './views/pages/curr-detail/curr-detail.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';

import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './views/pages/search-bar/search-bar.component';
import { DisplayBarComponent } from './views/pages/display-bar/display-bar.component';
import { ForecastDisplayComponent } from './views/pages/forecast-display/forecast-display.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    CurrDetailComponent,
    SearchBarComponent,
    DisplayBarComponent,
    ForecastDisplayComponent
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
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
