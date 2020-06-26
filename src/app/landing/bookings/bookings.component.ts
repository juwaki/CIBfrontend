import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  flight = 'Flights';
  hotels = 'Hotels';
  holiday = 'Holidays';
  bookingForm: FormGroup;
  selectedVal: string;
  domestic: boolean;

  encapsulation: ViewEncapsulation.None;

  constructor() { 
    this.domestic = true;
  }

  ngOnInit() {
    this.selectedVal ='option1';
    this.initForm();
  }

  initForm(){
    this.bookingForm = new FormGroup({

    });
  }

  International(){
    this.domestic = false;
  }

  domestics() {
    this.domestic = true;
  }
}
