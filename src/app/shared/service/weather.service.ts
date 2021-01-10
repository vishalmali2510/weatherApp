import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517'
          // 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517'
      );
  }
  getDaysWeather(location){
    return this.http.get(
        // 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517'
        // daily
        'http://api.openweathermap.org/data/2.5/forecast?q='+location+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517'
        // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    );  
  }
}
