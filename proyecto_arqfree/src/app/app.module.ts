import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatosAdicionalesComponent } from './pages/diagnosticoproyecto/datos-adicionales/datos-adicionales.component';
import { ClienteComponent } from './pages/diagnosticoproyecto/cliente/cliente.component';
import { CuadroNecesidadesComponent } from './pages/diagnosticoproyecto/cuadro-necesidades/cuadro-necesidades.component';
import { RecomendacionesComponent } from './pages/diagnosticoproyecto/recomendaciones/recomendaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimerNivelComponent } from './pages/diagnosticoproyecto/cliente/primer-nivel/primer-nivel.component';
import { SegundoNivelComponent } from './pages/diagnosticoproyecto/cliente/segundo-nivel/segundo-nivel.component';
import { TercerNivelComponent } from './pages/diagnosticoproyecto/cliente/tercer-nivel/tercer-nivel.component';
import { DiagnosticoProyectoComponent } from './pages/diagnosticoproyecto/diagnostico-proyecto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    CuadroNecesidadesComponent,
    RecomendacionesComponent,
    DatosAdicionalesComponent,
    PrimerNivelComponent,
    SegundoNivelComponent,
    TercerNivelComponent,
    DiagnosticoProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
