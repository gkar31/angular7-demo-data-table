import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';
import { ICar } from './../car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars:ICar[] = [];

  displayedColumns: string[] = ['Picture', 'Name', 'Power', 'Couple', 'Perf'];

  dataSource:ICar[] = [];
  constructor(private _carService: CarsService) { }

  ngOnInit() {
    this._carService.getCars()
    .subscribe(data => this.dataSource = data);


  }

}
