import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoNivelComponent } from './segundo-nivel.component';

describe('SegundoNivelComponent', () => {
  let component: SegundoNivelComponent;
  let fixture: ComponentFixture<SegundoNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoNivelComponent]
    });
    fixture = TestBed.createComponent(SegundoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
