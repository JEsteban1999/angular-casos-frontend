import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCasoComponent } from './asignar-caso.component';

describe('AsignarCasoComponent', () => {
  let component: AsignarCasoComponent;
  let fixture: ComponentFixture<AsignarCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarCasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
