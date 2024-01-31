import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/cu-service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})


export class CurrencyPage implements OnInit {

  countryCodes = [];
  countryNames = new Map();

  resultRate: any;
  swappedRate: any;

  fromValue: any;
  toValue: any;

  fromCurr: any; // default values
  toCurr: any; // default values

  constructor( protected cuService: CurrencyService, public http: HttpClient) {
  }

  ngOnInit() {
    this.fetchCountries();
    this.getCurrencyRate();
  }

  /* Retrieve list of valid country codes/currencies. Additionally displays them in the console view of the browser */
  async fetchCountries() {
    try {
      const countriesResponse = await this.cuService.getCountries();
      for (const countryCode in countriesResponse['results']) {
        if (countriesResponse['results'].hasOwnProperty(countryCode)) {
          this.countryCodes.push(countryCode);
          this.countryNames.set(countryCode, countriesResponse['results'][countryCode].currencyName);
        }
      }
    } catch (error) {
      console.error(error);
      // You might want to handle the error in a more user-friendly way, such as displaying an error message to the user.
    }
  }
/*   try {
      const res = await this.cuService.getCountries();
      for (const x in res['results']) {
        this.countryCodes.push(x);
        this.countryNames.set(x, res['results'][x].currencyName);
      }
    } catch (err) {
      console.error(err);
    }
    console.log(this.countryNames);
  }*/

  /* This fuction collects current currency rates from API */
  async getCurrencyRate() {
    const from = this.fromCurr;
    const to = this.toCurr;
    try {
      const exchangeRate = await this.cuService.getExchangeRate(from, to);
      const rate = exchangeRate[from + '_' + to].val;
      this.resultRate = rate;
    }
    catch (err) {
      console.error(err);
    }
  }


  /* These functions calculate the currency values for the converter  */

  calculateCurrencyOne() {
    this.toValue = this.fromValue * parseFloat(this.resultRate);

  }
  calculateCurrencyTwo() {
    this.fromValue = this.toValue / parseFloat(this.resultRate);

  }
}

