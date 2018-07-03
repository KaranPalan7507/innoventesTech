import { Component, OnInit, ViewChild } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-select-details',
  templateUrl: './select-details.component.html',
  styleUrls: ['./select-details.component.css']
})
export class SelectDetailsComponent implements OnInit {

  adultMaxValue: number = 4;
  childMaxValue: number = 4;

  @ViewChild('roomsSpinner') roomsSpinner: SpinnerComponent;
  @ViewChild('adultSpinner') adultSpinner: SpinnerComponent;
  @ViewChild('childSpinner') childSpinner: SpinnerComponent;

  constructor() { }

  ngOnInit() {
  }

  setPersonsMaxValue(value: number) {
    const maxPerson = value * 4;
    const currentTotal = this.childSpinner.currentValue + this.adultSpinner.currentValue;
    if (currentTotal > maxPerson) {
      const maxChild = maxPerson - this.adultSpinner.currentValue > 0 ? maxPerson - this.adultSpinner.currentValue : 0;
      this.childSpinner.currentValue = maxChild;
    }
    if (currentTotal > maxPerson) {
      const maxAdult = maxPerson - this.childSpinner.currentValue > 0 ? maxPerson - this.childSpinner.currentValue : 0;
      this.adultSpinner.currentValue = maxAdult;
    }
    if (this.adultSpinner.currentValue < value) {
      this.adultSpinner.currentValue = value;
    }
    this.adultSpinner.minValue = value;
    this.adultMaxValue = maxPerson - this.childSpinner.currentValue;
    this.childMaxValue = maxPerson - this.adultSpinner.currentValue;

  }

  setAdultMaxValue() {
    this.adultMaxValue = (this.roomsSpinner.currentValue * 4) - this.childSpinner.currentValue;
  }

  setChildMaxValue() {
    this.childMaxValue = (this.roomsSpinner.currentValue * 4) - this.adultSpinner.currentValue;
  }

}
