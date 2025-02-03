import { Component } from '@angular/core';
import { CasoService } from '../../services/caso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-estado',
  templateUrl: './actualizar-estado.component.html',
  styleUrls: ['./actualizar-estado.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ActualizarEstadoComponent {
  casoId: number = 0;
  estado: string = '';

  constructor(private casoService: CasoService) {}

  actualizarEstado(): void {
    if (this.casoId && this.estado) {
      this.casoService.actualizarEstado(this.casoId, this.estado).subscribe(
        (response) => {
          console.log('Estado actualizado:', response);
          alert('Estado actualizado correctamente');

          // Limpia los campos
          this.casoId = 0;
          this.estado = '';
        },
        (error) => {
          console.error('Error al actualizar el estado:', error);
          alert('Error al actualizar el estado');
        }
      );
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}