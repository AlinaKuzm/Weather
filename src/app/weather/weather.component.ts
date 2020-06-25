import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  url;
  key = 'd101d159ba56c460e0a6663eb0a7b342';
  weather: any;
  city = '';
  isHidden = true;

  constructor(public http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  ngOnInit(): void {
    // if (this.city.trim() === '') {
    //   alert('Enter the city');
    // }
  }

  getWeather() {
    if (this.city.trim() !== '') {
      return this.http.get(this.url + this.city + '&APPID=' + this.key).subscribe(
        response => {
          console.log(response);
          this.weather = response;
          this.isHidden = false;
        });
    } else {
      alert('Enter the city');
      this.isHidden = true;
      this.weather = null;
    }

  }
}


