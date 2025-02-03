import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCasoComponent } from './registrar-caso.component';

describe('RegistrarCasoComponent', () => {
  let component: RegistrarCasoComponent;
  let fixture: ComponentFixture<RegistrarCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarCasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
