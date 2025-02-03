import { Component } from '@angular/core';
import { CasoRequestDTO } from '../../models/caso-request-dto.model';
import { CasoService } from '../../services/caso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar-caso',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registrar-caso.component.html',
  styleUrl: './registrar-caso.component.css',
  standalone: true
})
export class RegistrarCasoComponent {
  casoRequest: CasoRequestDTO = {
    usuarioId: 0,
    tipo: '',
    descripcion: ''
  };

  constructor(private casoService: CasoService) {}

  onSubmit(): void {
    this.casoService.registrarCaso(this.casoRequest).subscribe(res => {
      console.log("Caso registrado");
      alert("Caso registrado correctamente");

      this.casoRequest = {
        usuarioId: 0,
        tipo: '',
        descripcion: ''
      }
    })
  }
}
