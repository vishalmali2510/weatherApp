import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  constructor() { }

  private _weatherData: any;

  set weatherData(value: any) {
    this._weatherData = value;
  }

  get weatherData(): any {
    return this._weatherData;
  }

}
