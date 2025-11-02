import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor() { }

  ngOnInit() {
  }

}
