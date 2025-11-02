import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { VehiculoModule } from "./vehiculo/vehiculo.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, routes, VehiculoModule, HttpClientModule],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}