import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './views/pages/launch/launch.component';
import { CurrDetailComponent } from './views/pages/curr-detail/curr-detail.component';
import { PanelModule } from 'primeng/panel';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './views/pages/search-bar/search-bar.component';
import { DisplayBarComponent } from './views/pages/display-bar/display-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    CurrDetailComponent,
    SearchBarComponent,
    DisplayBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
