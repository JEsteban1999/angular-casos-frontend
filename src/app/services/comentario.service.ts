import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8080/comentarios';

  constructor(private http: HttpClient) {}

  agregarComentario(usuarioId: number, casoId: number, contenido: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.apiUrl}/agregar`, null, {
      params: { usuarioId: usuarioId.toString(), casoId: casoId.toString(), contenido }
    });
  }
}
