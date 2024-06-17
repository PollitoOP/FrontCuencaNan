import { Component, OnInit } from '@angular/core';
import { TipoEventos } from './tipo-eventos';
import { TipoeventosService } from './tipo-eventos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class TipoEventoFormComponent implements OnInit {

  public tipoEvento: TipoEventos = new TipoEventos();
  public titulo: string = "Crear nuevo tipo de evento"

  constructor(private tipoEventoService: TipoeventosService,
    private router: Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  cargarTipoEvento(): void{
    this.activateRoute.params.subscribe(params=>{
      let id_tipoEvento=params['id_tipoEvento']
      if (id_tipoEvento) {
        this.tipoEventoService.getTipoEvento(id_tipoEvento).subscribe((tipoEvento)=>this.tipoEvento=tipoEvento)
      }
    })
  }

  public crearTipoEvento():void{
    this.tipoEventoService.crearTIpoEventos(this.tipoEvento).subscribe(
      tipoEventos=>{
        this.router.navigate(['/tipo_eventos'])
        window.alert('Tipo de evento creado')
      }
    )
  }
}
