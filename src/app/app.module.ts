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
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    CurrDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    AppRoutingModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
