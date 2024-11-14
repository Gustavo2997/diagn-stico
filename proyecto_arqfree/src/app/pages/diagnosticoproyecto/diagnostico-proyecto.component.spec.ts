import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoProyectoComponent } from './diagnostico-proyecto.component';

describe('DiagnosticoProyectoComponent', () => {
  let component: DiagnosticoProyectoComponent;
  let fixture: ComponentFixture<DiagnosticoProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticoProyectoComponent]
    });
    fixture = TestBed.createComponent(DiagnosticoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
