import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Eventos } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private urlEndopoint: string = 'http://localhost:8080/api/eventos';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Eventos[]> {

    return this.http.get(this.urlEndopoint).pipe(
      map(response => response as Eventos[])
    );
  }

  crearEvento(eventos: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(this.urlEndopoint, eventos, { headers: this.httpHeaders })
  }

  getEvento(id: number): Observable<Eventos> {
    return this.http.get<Eventos>(`${this.urlEndopoint}/${id}`);
  }

  EliminarEvento(id: number): Observable<Eventos> {
    return this.http.delete<Eventos>(`${this.urlEndopoint}/${id}`);
  }

}
