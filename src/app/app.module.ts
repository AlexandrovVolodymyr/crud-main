import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarsComponent } from './cars/cars.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { CarPageComponent } from './car-page/car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCarComponent,
    CarsComponent,
    HomeComponent,
    CarPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
