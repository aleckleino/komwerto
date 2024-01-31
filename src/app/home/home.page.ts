import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  weatherData: any;
  constructor() { }

  ngOnInit() {
    this.weatherData = {
      main : {},
      isDay: true
    };
    this.getweatherData();
    console.log(this.weatherData);
  }

  /* Gets current weather data from the API */
  getweatherData(){
    // eslint-disable-next-line max-len
    const data=JSON.parse('{"coord":{"lon":24.9355,"lat":60.1695},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":300.92,"feels_like":277.41,"temp_min":279.82,"temp_max":280.15,"pressure":994,"humidity":76},"visibility":10000,"wind":{"speed":3.6,"deg":10},"clouds":{"all":75},"dt":1620316857,"sys":{"type":1,"id":1332,"country":"FI","sunrise":1620266612,"sunset":1620325810},"timezone":10800,"id":658225,"name":"Helsinki","cod":200}');
  this.setweatherData(data);
    }
  /* Converts temperatures from Kelvins to Celsius & displays the local time + sunset */
    setweatherData(data){
      this.weatherData=data;
      const sunsetTime=new Date(this.weatherData.sys.sunset*1000);
      this.weatherData.sunset_time=sunsetTime.toLocaleDateString();
      const currentDate=new Date();
      this.weatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
      this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
      this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
      this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
      this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
    }

}
