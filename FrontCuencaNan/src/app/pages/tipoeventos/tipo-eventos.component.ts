import { Component, OnInit } from '@angular/core';
import { TipoEventos } from './tipo-eventos';
import { TipoeventosService } from './tipo-eventos.service';

@Component({
  selector: 'app-tipo-eventos',
  templateUrl: './tipo-eventos.component.html',
  styleUrls: ['./tipo-eventos.component.scss']
})
export class TipoEventosComponent implements OnInit {

  tipoEventoss: TipoEventos[]=[];

  constructor(private tipoEventosServices: TipoeventosService) { }

  ngOnInit(): void {
    this.tipoEventosServices.getTipoEventos().subscribe(
      tipoEventos => this.tipoEventoss=tipoEventos
    );

    console.log("sfdds")

    console.log(this.tipoEventosServices.getTipoEventos().subscribe(
      tipoEventos => this.tipoEventoss=tipoEventos
    ))
  }
}
