import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MaterialModule } from './material.module';
import { BookingsComponent } from './landing/bookings/bookings.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   MatCardModule,
   MatMenuModule,
   MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
