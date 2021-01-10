import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {allAppRoutes} from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from "./shared/service/Weather.service";
import { GetterSetterService } from "./shared/service/getter-setter.service";
import { DateTimeFormatePipe } from './shared/pipe/date-time-format.pipe';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DateTimeFormatePipe,
    WeatherDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, GetterSetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
