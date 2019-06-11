import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  title = 'CRUD CARS LIST';

  cars: Cars[] = [];
  carName = '';
  carColor = '';

  modalFlag = false;
  carSelected = {
    id: null,
    name: '',
    color: ''
  };

  constructor(
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carsService.getCars()
      .subscribe((response: Cars[]) => {
        this.cars = response;
      });
  }

  addCar() {
    const data = {
      name: this.carName,
      color: this.carColor
    };
    if (this.carName !== '') {
      this.carsService.addCar(data)
        .subscribe((car: Cars) => {
          if (car.name === '') {
            return;
          } else {
            this.cars.push(car);
          }
        });
    } else {
      alert('Car name is empty');
    }

    this.carName = '';
    this.carColor = '';
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe(() => {
        this.loadCars();
      });
  }

  editCar(car: Cars) {
    this.modalFlag = true;
    this.carSelected.id = car.id;
    this.carSelected.name = car.name;
    this.carSelected.color = car.color;


  }

  newUpdateCar(data) {
    this.carsService.editCar(data)
      .subscribe(() => {
        this.modalFlag = false;
        this.loadCars();
      });
  }

}
