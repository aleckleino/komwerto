import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// API for currency converter

@Injectable()
export class CurrencyService {

    apiKey = 'fee14ae24240b836c2f1';

    constructor(public http: HttpClient) {}

    getCountries() {
        return this.http.get(`https://free.currconv.com/api/v7/currencies?apiKey=${this.apiKey}`).toPromise();
    }

    getExchangeRate(from: string, to: string){
    return this.http.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${this.apiKey}`).toPromise();

}

}
