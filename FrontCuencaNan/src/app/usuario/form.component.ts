import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
