import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquids',
  templateUrl: './liquids.page.html',
  styleUrls: ['./liquids.page.scss'],
})
export class LiquidsPage implements OnInit {

  value = '';
  convertedOutput = '';
  eka: string;
  toka: string;
  constructor() { }

  ngOnInit() {
  }

  conversion() {
    const output=document.getElementById('convertedOutput');
    const madeSelection1 = this.eka;
    const madeSelection2 = this.toka;

    const numero=parseFloat(this.value);
    if (madeSelection1 === madeSelection2) {
      const result = numero;
      const muutos = result.toString();
      output.innerHTML = muutos;
    }


    // Liters
    if (madeSelection1 === 'liters1' && madeSelection2 === 'deci1') {
      const result = numero * 10;
      const muutos=result.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'liters1' && madeSelection2 === 'cups1'){
      const result = numero * 4.227;
      const result2=result.toFixed(1);
      const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'liters1' && madeSelection2 === 'pints1'){
      const result = numero * 2.113;
      const result2=result.toFixed(1);
      const muutos=result.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'liters1' && madeSelection2 === 'quarts1'){
      const result = numero * 1.057;
      const result2=result.toFixed(3);
      const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'liters1' && madeSelection2 === 'gallons1'){
      const result = numero * 0.264172;
      const result2=result.toFixed(2);
      const muutos=result2.toString();
      output.innerHTML=muutos;
    }

    // Deciliters
    if (madeSelection1 === 'deci1' && madeSelection2 === 'liters1') {
        const result = numero * 0.1;
        const result2 = result.toFixed(1);
        const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'deci1' && madeSelection2 === 'cups1') {
        const result = numero / 2.366;
        const result2 = result.toFixed(2);
        const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'deci1' && madeSelection2 === 'pints1') {
        const result = numero / 4.732;
        const result2= result.toFixed(2);
        const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'deci1' && madeSelection2 === 'quarts1') {
        const result = numero / 9.464;
        const result2 = result.toFixed(2);
        const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'deci1' && madeSelection2 === 'gallons1') {
        const result = numero / 37.854;
        const result2 = result.toFixed(2);
        const muutos = result2.toString();
        output.innerHTML = muutos;
      }

  // Cups
  if (madeSelection1 === 'cups1' && madeSelection2 === 'liters1') {
    const result = numero / 4.227;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'cups1' && madeSelection2 === 'deci1'){
    const result = numero * 2.366;
    const result2=result.toFixed(1);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'cups1' && madeSelection2 === 'pints1'){
    const result = numero * 0.5;
    const result2=result.toFixed(1);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'cups1' && madeSelection2 === 'quarts1'){
    const result = numero * 0.25;
    const result2=result.toFixed(1);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'cups1' && madeSelection2 === 'gallons1'){
    const result = numero / 16;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }

  // Pints
  if (madeSelection1 === 'pints1' && madeSelection2 === 'liters1') {
    const result = numero / 2.113;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'pints1' && madeSelection2 === 'deci1'){
    const result = numero * 4.732;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'pints1' && madeSelection2 === 'cups1'){
    const result = numero * 2;
    const result2=result.toFixed(1);
    const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'pints1' && madeSelection2 === 'quarts1'){
    const result = numero / 2;
    const result2=result.toFixed(1);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'pints1' && madeSelection2 === 'gallons1'){
    const result = numero / 8;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }

  // Quarts
  if (madeSelection1 === 'quarts1' && madeSelection2 === 'liters1') {
    const result = numero / 1.057;
    const result2 = result.toFixed(2);
    const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'quarts1' && madeSelection2 === 'deci1') {
    const result = numero * 9.464;
    const result2 = result.toFixed(1);
    const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'quarts1' && madeSelection2 === 'cups1') {
    const result = numero * 9.464;
    const muutos = result.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'quarts1' && madeSelection2 === 'pints1') {
    const result = numero * 2;
    const muutos = result.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'quarts1' && madeSelection2 === 'gallons1') {
    const result = numero / 4;
    const result2 = result.toFixed(1);
    const muutos = result2.toString();
    output.innerHTML = muutos;
  }

  // Gallons
  if (madeSelection1 === 'gallons1' && madeSelection2 === 'liters1') {
    const result = numero * 3.785;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'gallons1' && madeSelection2 === 'deci1'){
    const result = numero * 37.854;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'gallons1' && madeSelection2 === 'cups1'){
    const result = numero * 16;
    const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'gallons1' && madeSelection2 === 'pints1'){
    const result = numero * 8;
    const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'gallons1' && madeSelection2 === 'quarts1'){
    const result = numero * 4;
    const muutos=result.toString();
    output.innerHTML=muutos;
  }
  // Outputs blank if value is null
  if (this.value === null)  {
    output.innerHTML = '';
  }
  }
}
