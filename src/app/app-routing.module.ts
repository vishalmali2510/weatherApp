import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

export const allAppRoutes: Routes = [
  {
    path: '', redirectTo: 'weather', pathMatch: 'full'
  },
  { 
    path: 'weather', 
    component: WeatherComponent,
    children: [
            {
                path: 'weather-details',
                component: WeatherDetailsComponent,
            }
    ]
  },
  { 
    path: 'weather-details', 
    component: WeatherDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
