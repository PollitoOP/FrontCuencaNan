import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private urlEndopoint: string = "http://localhost:8080/api/usuarios";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndopoint);
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndopoint, usuario, {
      headers: this.httpHeaders,
    });
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndopoint}/${id}`);
  }

  eliminarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndopoint}/${id}`);
  }
}
