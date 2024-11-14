import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerNivelComponent } from './tercer-nivel.component';

describe('TercerNivelComponent', () => {
  let component: TercerNivelComponent;
  let fixture: ComponentFixture<TercerNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerNivelComponent]
    });
    fixture = TestBed.createComponent(TercerNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
