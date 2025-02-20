import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCasosComponent } from './listar-casos.component';

describe('ListarCasosComponent', () => {
  let component: ListarCasosComponent;
  let fixture: ComponentFixture<ListarCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCasosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
