import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/diagnosticoproyecto/cliente/cliente.component';
import { CuadroNecesidadesComponent } from './pages/diagnosticoproyecto/cuadro-necesidades/cuadro-necesidades.component';
import { DatosAdicionalesComponent } from './pages/diagnosticoproyecto/datos-adicionales/datos-adicionales.component';
import { RecomendacionesComponent } from './pages/diagnosticoproyecto/recomendaciones/recomendaciones.component';
import { PrimerNivelComponent } from './pages/diagnosticoproyecto/cliente/primer-nivel/primer-nivel.component';
import { SegundoNivelComponent } from './pages/diagnosticoproyecto/cliente/segundo-nivel/segundo-nivel.component';
import { TercerNivelComponent } from './pages/diagnosticoproyecto/cliente/tercer-nivel/tercer-nivel.component';
import { DiagnosticoProyectoComponent } from './pages/diagnosticoproyecto/diagnostico-proyecto.component';

const routes: Routes = [
  {path: 'diagnostico', component: DiagnosticoProyectoComponent},
  { path: 'clientes', component: ClienteComponent },
  { path: 'primer-nivel', component: PrimerNivelComponent},
  { path: 'segundo-nivel', component: SegundoNivelComponent},
  { path: 'tercer-nivel', component: TercerNivelComponent},
  { path: 'cuadro-necesidades', component: CuadroNecesidadesComponent },
  { path: 'datos-adicionales', component: DatosAdicionalesComponent },
  { path: '**', redirectTo: 'diagnostico', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
