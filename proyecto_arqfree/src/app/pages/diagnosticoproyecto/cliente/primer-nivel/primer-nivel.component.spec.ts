import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerNivelComponent } from './primer-nivel.component';

describe('PrimerNivelComponent', () => {
  let component: PrimerNivelComponent;
  let fixture: ComponentFixture<PrimerNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerNivelComponent]
    });
    fixture = TestBed.createComponent(PrimerNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
