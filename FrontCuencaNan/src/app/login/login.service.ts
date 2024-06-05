import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    private baseUrl = 'http://localhost:8080/api';
    private usuarioInfo: any;

    //Datos quemados de usuario admin
    private adminCredentials = {
        email: 'admin',
        password: 'admin123'
    };

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: { email: string, password: string }): Observable<any> {

        if (credentials.email === this.adminCredentials.email && credentials.password === this.adminCredentials.password) {

            return new Observable(observer => {
                this.usuarioInfo = {
                    nombre: 'admin',
                    tipoUsuario: 'admin'
                };
                observer.next(this.usuarioInfo);
                observer.complete();
            });
        } else {
            const url = `${this.baseUrl}/login`;
            return this.http.post(url, credentials, { headers: this.httpHeaders });
        }
    }

    getUsuarioInfo(): any {
        return this.usuarioInfo;
    }

    setUsuarioInfo(usuarioInfo: any): void {
        this.usuarioInfo = usuarioInfo;
    }

    CargarPag(): void {
        if (this.usuarioInfo && this.usuarioInfo.tipoUsuario) {
            if (this.usuarioInfo.tipoUsuario === 'admin') {
                this.setUsuarioInfo(this.usuarioInfo);

                //redireccionar pagina del administrador
            }
        }
    }
}