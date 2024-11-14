import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  proyectoForm: FormGroup;
  paises = [
    // Sudamérica
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Perú', 'Surinam', 'Uruguay', 'Venezuela',
    // Europa
    'Alemania', 'España', 'Francia', 'Italia', 'Reino Unido', 'Portugal', 'Rusia', 'Países Bajos', 'Bélgica', 'Suiza',
    // África
    'Nigeria', 'Sudáfrica', 'Egipto', 'Argelia', 'Etiopía', 'Ghana', 'Kenia', 'Uganda', 'Angola', 'Mozambique',
    // Norteamérica
    'Estados Unidos', 'Canadá', 'México'
  ];
  
  pisos = ['1 NIVEL','2 NIVELES', '2 NIVELES + TERRAZA'];

  constructor(private fb: FormBuilder) {
    this.proyectoForm = this.fb.group({
      cliente: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      area: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      piso: ['', Validators.required],
      pais: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoProyecto: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.proyectoForm.valid) {
      console.log(this.proyectoForm.value);
    }
  }
}