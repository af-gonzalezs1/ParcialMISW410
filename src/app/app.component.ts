import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehiculoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial1';
}

