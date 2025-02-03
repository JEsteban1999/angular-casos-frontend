import { Component, OnInit } from '@angular/core';
import { CasoService } from '../../services/caso.service';
import { Caso } from '../../models/caso.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-casos',
  templateUrl: './listar-casos.component.html',
  styleUrls: ['./listar-casos.component.css'],
  imports: [FormsModule, CommonModule, RouterLink],
  standalone: true
})
export class ListarCasosComponent implements OnInit {
  casos: Caso[] = [];
  estudiante: string = '';

  constructor(private casoService: CasoService) {}

  ngOnInit(): void {}

  buscarCasos(): void {
    if (this.estudiante) {
      this.casoService.obtenerCasosPorEstudiante(this.estudiante).subscribe(
        (data: Caso[]) => {
          this.casos = data;
        },
        (error) => {
          console.error('Error al obtener los casos:', error);
        }
      );
    }
  }
}
