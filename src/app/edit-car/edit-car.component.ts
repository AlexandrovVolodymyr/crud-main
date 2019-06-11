import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  @Input() carSelected;
  @Input() closeModal;
  @Output() carChange = new EventEmitter();
  @Output() modalClose = new EventEmitter();

  constructor(
    public carsService: CarsService
  ) { }

  ngOnInit() {}

  updateCar() {
    this.carChange.emit(this.carSelected);
  }

  closeCarCard() {
    this.modalClose.emit(this.closeModal);
  }

}
