import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage implements OnInit {

  value='';
  convertedOutput='';
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


  // Kilograms
  if (madeSelection1 === 'kilograms1' && madeSelection2 === 'pounds1') {
    const result = numero * 2.2046;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilograms1' && madeSelection2 === 'ounces1'){
    const result = numero * 35.27396195;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilograms1' && madeSelection2 === 'grams1'){
    const result = numero * 1000;
    const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilograms1' && madeSelection2 === 'stones1'){
    const result = numero * 0.157473044;
    const result2=result.toFixed(2);
    const muutos=result2.toString();
    output.innerHTML=muutos;
  }

    // Pounds
    if (madeSelection1 === 'pounds1' && madeSelection2 === 'kilograms1') {
      const result = numero * 0.45359237;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'pounds1' && madeSelection2 === 'ounces1') {
      const result = numero * 16;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'pounds1' && madeSelection2 === 'grams1') {
      const result = numero * 453.59237;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }
    if (madeSelection1 === 'pounds1' && madeSelection2 === 'stones1') {
      const result = numero * 0.0714285714;
      const result2 = result.toFixed(2);
      const muutos = result2.toString();
      output.innerHTML = muutos;
    }

// Ounces
if (madeSelection1 === 'ounces1' && madeSelection2 === 'kilograms1') {
  const result = numero * 0.0283495231;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'ounces1' && madeSelection2 === 'pounds1'){
  const result = numero * 0.0625;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'ounces1' && madeSelection2 === 'grams1'){
  const result = numero * 28.3495231;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'ounces1' && madeSelection2 === 'stones1'){
  const result = numero * 0.00446428571;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}

// Grams
if (madeSelection1 === 'grams1' && madeSelection2 === 'kilograms1') {
  const result = numero * 1000;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'grams1' && madeSelection2 === 'ounces1'){
  const result = numero * 0.0352739619;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'grams1' && madeSelection2 === 'pounds1'){
  const result = numero * 0.00220462262;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'grams1' && madeSelection2 === 'stones1'){
  const result = numero * 0.000157473044;
  const result2=result.toFixed(4);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}

// Stones
if (madeSelection1 === 'stones1' && madeSelection2 === 'kilograms1') {
  const result = numero * 6.35;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'stones1' && madeSelection2 === 'pounds1'){
  const result = numero * 14;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'stones1' && madeSelection2 === 'ounces1'){
  const result = numero * 224;

  const muutos=result.toString();
  output.innerHTML=muutos;
}
if (madeSelection1 === 'stones1' && madeSelection2 === 'grams1'){
  const result = numero * 6350;
  const result2=result.toFixed(2);
  const muutos=result2.toString();
  output.innerHTML=muutos;
}
  // Outputs blank if value is null
if (this.value === null)  {
  output.innerHTML = ' ';
}
}


}
