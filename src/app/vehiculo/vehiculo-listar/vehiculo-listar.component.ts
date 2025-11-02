import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VehiculoListarComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculos = vehiculos;
        console.log('Vehiculos loaded:', vehiculos);
      },
      error: (error) => {
        console.error('Error loading vehiculos:', error);
      }
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
