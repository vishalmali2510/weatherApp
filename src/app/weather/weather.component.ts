import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from "../shared/service/Weather.service";
import { GetterSetterService } from "../shared/service/getter-setter.service";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  public weatherData: any[] = [];
  public search: any;
  public weatherSearchForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private getterSetterService: GetterSetterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    let location = ['London', 'Paris', 'Rome', 'Berlin', 'Lisbon'];
    location.forEach((value, key) => {
      this.sendToAPIXU(value);
    });
  }

  searchCity(){
    let location = this.weatherSearchForm.get('location').value;
    this.sendToAPIXU(location);
    this.weatherSearchForm.reset();
  }

  sendToAPIXU(location){
    this.weatherService.getWeather(location).subscribe(res => {
      this.weatherData.push(res);
    }, err => {
      console.info('error in get weather Service', err)
    })
  }

  openWeatherDetails(weatherData){
    this.getterSetterService.weatherData = weatherData;
    this.router.navigate(['weather-details']);
  }
}

