import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { VehiculoListarComponent } from './vehiculo-listar.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { of } from 'rxjs';

describe('VehiculoListarComponent', () => {
  let component: VehiculoListarComponent;
  let fixture: ComponentFixture<VehiculoListarComponent>;
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    const vehiculosPrueba: Vehiculo[] = [
      new Vehiculo(
        1,
        "Benelli",
        "TRK",
        "250",
        2024,
        35123,
        "Arena",
        "https://web2.fireboldweb.com/wp-content/uploads/2023/05/290520231685384523trk-251-arena-2024-foto1.png"
      ),
      new Vehiculo(
        2,
        "Kawasaki",
        "Versys",
        "1000",
        2020,
        87542,
        "Verde",
        "https://www.motofichas.com/images/phocagallery/Kawasaki/versys-1000-2020/01-kawasaki-versys-se-1000-2020-estudio-verde.jpg"
      ),
      new Vehiculo(
        3,
        "BMW",
        "Heritage",
        "R 18 Transcontinental",
        2025,
        0,
        "Negro",
        "blob:https://www.bmw-motorrad.co/2ae51625-0a9c-463c-a83d-19709cf9f3ee"
      )
    ];

    mockVehiculoService = jasmine.createSpyObj('VehiculoService', ['getVehiculos']);
    mockVehiculoService.getVehiculos.and.returnValue(of(vehiculosPrueba));
    
    await TestBed.configureTestingModule({
      imports: [VehiculoListarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: VehiculoService, useValue: mockVehiculoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListarComponent);
    component = fixture.componentInstance;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('deberia generar una tabla con header y tres filas', () => {
    fixture.detectChanges();

    expect(mockVehiculoService.getVehiculos).toHaveBeenCalled();

    const headerRow = fixture.debugElement.query(By.css('thead tr'));
    expect(headerRow).toBeTruthy();

    const headerCells = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4);

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);

    rows.forEach((row, index) => {
      const cells = row.queryAll(By.css('td'));
      expect(cells.length).toBe(4);
      
      if (index === 0) {
        expect(cells[0].nativeElement.textContent.trim()).toBe('1');
        expect(cells[1].nativeElement.textContent.trim()).toBe('Benelli');
        expect(cells[2].nativeElement.textContent.trim()).toBe('TRK');
        expect(cells[3].nativeElement.textContent.trim()).toBe('2024');
      }
    });
  });
});