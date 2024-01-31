import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {

  value = '';
  convertedOutput = '';
  eka: string;
  toka: string;

  constructor() { }

  ngOnInit() {
  }


  conversion() {
    const output = document.getElementById('convertedOutput');

    const madeSelection1 = this.eka;
    const madeSelection2 = this.toka;

    const numero = parseFloat(this.value);

    if (madeSelection1 === madeSelection2) {
      const result = numero;
      const muutos = result.toString();
      output.innerHTML = muutos;
    }
    //Celsius
    if (madeSelection1 === 'Celsius' && madeSelection2 === 'Fahrenheit') {
      const result = numero * 9 / 5 + 32;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'Celsius' && madeSelection2 === 'Kelvin') {
      const result = numero + 273.15;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    //Fahrenheit
    if (madeSelection1 === 'Fahrenheit' && madeSelection2 === 'Celsius') {
      const result = (numero - 32) * 5 / 9;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'Fahrenheit' && madeSelection2 === 'Kelvin') {
      const result = (numero + 459.67) * 5 / 9;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    //Kelvin
    if (madeSelection1 === 'Kelvin' && madeSelection2 === 'Celsius') {
      const result = numero - 273.15;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'Kelvin' && madeSelection2 === 'Fahrenheit') {
      const result = numero * 9 / 5 - 459.67;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }

    if (this.value === null) {
      output.innerHTML = '';
    }
  }

}
