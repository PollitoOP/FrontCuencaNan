import { Component, OnInit } from '@angular/core';
import { TipoEventos } from '../../models/tipo-eventos';
import { TipoeventosService } from '../../services/tipo-eventos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-eventos',
  templateUrl: './tipo-eventos.component.html'
})
export class TipoEventosComponent implements OnInit {

  public tipoEvento: TipoEventos = new TipoEventos();
  public tipoEventoss: TipoEventos[] = [];
  public titulo: string = "Crear nuevo tipo de evento";

  constructor(
    private tipoEventoService: TipoeventosService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarTipoEvento();
    this.cargarTipoEventos();
  }

  cargarTipoEvento(): void {
    this.activateRoute.params.subscribe(params => {
      let id_tipoEvento = params['id_tipoEvento'];
      if (id_tipoEvento) {
        this.tipoEventoService.getTipoEvento(id_tipoEvento).subscribe(
          (tipoEvento) => this.tipoEvento = tipoEvento
        );
      }
    });
  }

  cargarTipoEventos(): void {
    this.tipoEventoService.getTipoEventos().subscribe(
      tipoEventos => this.tipoEventoss = tipoEventos
    );
  }

  public crearTipoEvento(): void {
    this.tipoEventoService.crearTIpoEventos(this.tipoEvento).subscribe(
      tipoEventos => {
        this.router.navigate(['/tipo_eventos']);
        window.alert('Tipo de evento creado');
      }
    );
  }
}