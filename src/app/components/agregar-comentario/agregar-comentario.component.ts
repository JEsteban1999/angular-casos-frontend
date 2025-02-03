import { Component } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.component.html',
  styleUrls: ['./agregar-comentario.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AgregarComentarioComponent {
  usuarioId: number = 0;
  casoId: number = 0;
  contenido: string = '';

  constructor(private comentarioService: ComentarioService) {}

  agregarComentario(): void {
    if (this.usuarioId && this.casoId && this.contenido) {
      this.comentarioService.agregarComentario(this.usuarioId, this.casoId, this.contenido).subscribe(
        (response) => {
          console.log('Comentario agregado:', response);
          alert('Comentario agregado correctamente');

          // Resetear los campos
          this.usuarioId = 0;
          this.casoId = 0;
          this.contenido = '';
        },
        (error) => {
          console.error('Error al agregar el comentario:', error);
          alert('Error al agregar el comentario');
        }
      );
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
