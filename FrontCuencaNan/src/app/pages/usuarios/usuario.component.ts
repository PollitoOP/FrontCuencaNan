import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public usuarios: Usuario[] = [];
  public titulo: string = "Crear nuevo usuario";

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarUsuarios();
  }

  cargarUsuario(): void {
    this.activateRoute.params.subscribe(params => {
      let id_usuario = params['id_usuario'];
      if (id_usuario) {
        this.usuarioService.getUsuario(id_usuario).subscribe(
          (usuario) => this.usuario = usuario
        );
      }
    });
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  public crearUsuario(): void {
    this.usuarioService.crearUsuario(this.usuario).subscribe(
      usuario => {
        this.router.navigate(['/usuarios']);
        window.alert('Usuario creado');
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id_usuario !== id);
        window.alert('Usuario eliminado');
      }
    );
  }
}