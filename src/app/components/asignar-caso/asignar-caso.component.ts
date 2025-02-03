import { Component } from '@angular/core';
import { CasoService } from '../../services/caso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar-caso',
  templateUrl: './asignar-caso.component.html',
  styleUrls: ['./asignar-caso.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AsignarCasoComponent {
  casoId: number = 0;
  estudiante: string = '';

  constructor(private casoService: CasoService) {}

  asignarCaso(): void {
    if (this.casoId && this.estudiante) {
      this.casoService.asignarCaso(this.casoId, this.estudiante).subscribe(
        (response) => {
          console.log('Caso asignado:', response);
          alert('Caso asignado correctamente');

          // Resetear formulario
          this.casoId = 0;
          this.estudiante = '';
        },
        (error) => {
          console.error('Error al asignar el caso:', error);
          alert('Error al asignar el caso');
        }
      );
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
