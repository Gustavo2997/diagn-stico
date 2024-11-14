import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroNecesidadesComponent } from './cuadro-necesidades.component';

describe('CuadroNecesidadesComponent', () => {
  let component: CuadroNecesidadesComponent;
  let fixture: ComponentFixture<CuadroNecesidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadroNecesidadesComponent]
    });
    fixture = TestBed.createComponent(CuadroNecesidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
