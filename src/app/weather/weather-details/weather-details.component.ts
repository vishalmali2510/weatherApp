import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetterSetterService } from "../../shared/service/getter-setter.service";
import { WeatherService } from "../../shared/service/Weather.service";
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.sass']
})
export class WeatherDetailsComponent implements OnInit {
  public weatherData: any;
  public weatherDaysData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getterSetterService: GetterSetterService,
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weatherData = this.getterSetterService.weatherData;
    console.log(this.weatherData);
    this.get5DaysweatherData(this.weatherData.name);
  }

  get5DaysweatherData(location){
    this.weatherService.getDaysWeather(location).subscribe(res => {
      this.weatherDaysData = res;
    }, err => {
      console.info('error in get weather Service', err)
    })
  }

  backToProduct(){
    this.router.navigate(['weather']);
  } 

  weatherIcon(icon){
    let data = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    return data;
  }
}
