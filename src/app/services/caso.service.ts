import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caso } from '../models/caso.model';
import { CasoRequestDTO } from '../models/caso-request-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CasoService {
  private apiUrl = 'http://localhost:8080/casos';

  constructor(private http: HttpClient) {}

  registrarCaso(request: CasoRequestDTO): Observable<Caso> {
    return this.http.post<Caso>(`${this.apiUrl}/registrar`, request);
  }

  asignarCaso(casoId: number, estudiante: string): Observable<Caso> {
    return this.http.put<Caso>(`${this.apiUrl}/${casoId}/asignar`, null, {
      params: { estudiante }
    });
  }

  actualizarEstado(casoId: number, estado: string): Observable<Caso> {
    return this.http.put<Caso>(`${this.apiUrl}/${casoId}/estado`, null, {
      params: { estado }
    });
  }

  obtenerCasosPorEstudiante(estudiante: string): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.apiUrl}/asignados`, {
      params: { estudiante }
    });
  }
}
