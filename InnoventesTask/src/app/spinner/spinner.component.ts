import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() currentValue: number = 0;
  @Input() minValue: number = 0;
  @Input() maxValue: number = 10;
  @Output() valueUpdate: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  decrementValue() {
    this.currentValue--;
    this.valueUpdate.next(this.currentValue);
  }

  incrementValue() {
    this.currentValue++;
    this.valueUpdate.next(this.currentValue);
  }

}
