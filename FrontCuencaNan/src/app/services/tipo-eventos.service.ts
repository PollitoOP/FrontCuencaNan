import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TipoEventos } from '../models/tipo-eventos';

@Injectable({
  providedIn: 'root'
})
export class TipoeventosService {

  private urlEndopoint: string = 'http://localhost:8080/api/tipo_eventos';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }

  getTipoEventos(): Observable<TipoEventos[]> {

    return this.http.get(this.urlEndopoint).pipe(
      map(response => response as TipoEventos[])
    );
  }

  crearTIpoEventos(tipoEventos: TipoEventos): Observable<TipoEventos> {

    return this.http.post<TipoEventos>(this.urlEndopoint, tipoEventos, { headers: this.httpHeaders })
  }

  getTipoEvento(id: number): Observable<TipoEventos> {

    return this.http.get<TipoEventos>(`${this.urlEndopoint}/${id}`);
  }

  EliminarTipoEvento(id: number): Observable<TipoEventos> {
    return this.http.delete<TipoEventos>(`${this.urlEndopoint}/${id}`);
  }
}
