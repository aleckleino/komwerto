import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenght',
  templateUrl: './lenght.page.html',
  styleUrls: ['./lenght.page.scss'],
})
export class LenghtPage implements OnInit {

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

    // Feet
    if (madeSelection1 === 'feet1' && madeSelection2 === 'meters1') {
      const result = numero * 0.3048;
      const result2=result.toFixed(3);
      const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'feet1' && madeSelection2 === 'inches1'){
      const result = numero * 12;
      const result2=result.toFixed(2);
  const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'feet1' && madeSelection2 === 'centimeters1'){
      const result = numero * 30.48;
      const result2=result.toFixed(2);
  const muutos=result.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'feet1' && madeSelection2 === 'yards1'){
      const result = numero * 0.333333;
      const result2=result.toFixed(3);
  const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'feet1' && madeSelection2 === 'kilometers1'){
      const result = numero * 0.0003048;
      const result2=result.toFixed(4);
  const muutos=result2.toString();
      output.innerHTML=muutos;
    }
    if (madeSelection1 === 'feet1' && madeSelection2 === 'miles1'){
      const result = numero * 0.000189394;
      const result2=result.toFixed(5);
  const muutos=result2.toString();
      output.innerHTML=muutos;
    }

    // Meters
    if (madeSelection1 === 'meters1' && madeSelection2 === 'feet1') {
        const result = numero * 3.28084;
        const result2 = result.toFixed(2);
    const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'meters1' && madeSelection2 === 'inches1') {
        const result = numero * 39.37;
        const result2 = result.toFixed(2);
    const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'meters1' && madeSelection2 === 'centimeters1') {
        const result = numero * 100;
    const muutos = result.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'meters1' && madeSelection2 === 'yards1') {
        const result = numero * 1.094;
        const result2 = result.toFixed(2);
    const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'meters1' && madeSelection2 === 'kilometers1') {
        const result = numero * 0.001;
        const result2 = result.toFixed(2);
    const muutos = result2.toString();
        output.innerHTML = muutos;
      }
      if (madeSelection1 === 'meters1' && madeSelection2 === 'miles1') {
        const result = numero * 0.000621371;
        const result2 = result.toFixed(2);
    const muutos = result2.toString();
        output.innerHTML = muutos;
      }

  // Inches
  if (madeSelection1 === 'inches1' && madeSelection2 === 'feet1') {
    const result = numero * 0.0833333;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'inches1' && madeSelection2 === 'meters1'){
    const result = numero * 0.0254;
    const result2=result.toFixed(3);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'inches1' && madeSelection2 === 'centimeters1'){
    const result = numero * 2.54;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'inches1' && madeSelection2 === 'yards1'){
    const result = numero * 0.0277778;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'inches1' && madeSelection2 === 'kilometers1'){
    const result = numero / 39370;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'inches1' && madeSelection2 === 'miles1'){
    const result = numero / 63360;
    const result2=result.toFixed(3);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }

  // Centimeters
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'feet1') {
    const result = numero * 0.0328084;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'meters1'){
    const result = numero * 0.01;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'inches1'){
    const result = numero * 0.393701;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'yards1'){
    const result = numero * 0.0109361;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'kilometers1'){
    const result = numero / 100000;
    const result2=result.toFixed(4);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'centimeters1' && madeSelection2 === 'miles1'){
    const result = numero / 160934;
    const result2=result.toFixed(4);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }

  // Yards
  if (madeSelection1 === 'yards1' && madeSelection2 === 'feet1') {
    const result = numero * 3;
    const result2 = result.toFixed(2);
const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'yards1' && madeSelection2 === 'meters1') {
    const result = numero * 0.9144;
    const result2 = result.toFixed(2);
const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'yards1' && madeSelection2 === 'inches1') {
    const result = numero * 36;
const muutos = result.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'yards1' && madeSelection2 === 'centimeters1') {
    const result = numero * 91.44;
    const result2 = result.toFixed(2);
const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'yards1' && madeSelection2 === 'kilometers1') {
    const result = numero * 0.0009144;
    const result2 = result.toFixed(2);
const muutos = result2.toString();
    output.innerHTML = muutos;
  }
  if (madeSelection1 === 'yards1' && madeSelection2 === 'miles1') {
    const result = numero * 0.000568181818;
    const result2 = result.toFixed(2);
const muutos = result2.toString();
    output.innerHTML = muutos;
  }

  // Kilometers
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'feet1') {
    const result = numero * 3280.8999;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'meters1'){
    const result = numero * 1000;
    const result2=result.toFixed(1);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'inches1'){
    const result = numero * 39370.0787;
const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'centimeters1'){
    const result = numero * 100000;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'yards1'){
    const result = numero * 1093.6133;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'kilometers1' && madeSelection2 === 'miles1'){
    const result = numero * 0.621371192;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  //Miles
  if (madeSelection1 === 'miles1' && madeSelection2 === 'feet1') {
    const result = numero * 5280;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'miles1' && madeSelection2 === 'meters1'){
    const result = numero * 1609.344;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'miles1' && madeSelection2 === 'inches1'){
    const result = numero * 63360;
const muutos=result.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'miles1' && madeSelection2 === 'centimeters1'){
    const result = numero * 160934.4;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'miles1' && madeSelection2 === 'yards1'){
    const result = numero * 1760;
    const result2=result.toFixed(2);
const muutos=result2.toString();
    output.innerHTML=muutos;
  }
  if (madeSelection1 === 'miles1' && madeSelection2 === 'kilometers1'){
    const result = numero * 1.609344;
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
