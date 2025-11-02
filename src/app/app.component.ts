import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiculoListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial1';
}

