// import { TestBed } from '@angular/core/testing';
// import { provideHttpClient } from '@angular/common/http';
// import { provideHttpClientTesting } from '@angular/common/http/testing';
// import { AppComponent } from './app.component';
// import { VehiculoService } from './vehiculo/vehiculo.service';
// import { of } from 'rxjs';

// describe('AppComponent', () => {
//   let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

//   beforeEach(async () => {
//     mockVehiculoService = jasmine.createSpyObj('VehiculoService', ['getVehiculos']);
//     mockVehiculoService.getVehiculos.and.returnValue(of([]));

//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//       providers: [
//         provideHttpClient(),
//         provideHttpClientTesting(),
//         { provide: VehiculoService, useValue: mockVehiculoService }
//       ]
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should have the "parcial1" title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('parcial1');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, parcial1');
//   });
// });