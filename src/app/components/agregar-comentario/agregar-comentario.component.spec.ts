import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentarioComponent } from './agregar-comentario.component';

describe('AgregarComentarioComponent', () => {
  let component: AgregarComentarioComponent;
  let fixture: ComponentFixture<AgregarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarComentarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
