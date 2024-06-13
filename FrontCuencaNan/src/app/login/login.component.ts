import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  signUpClick() {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

  signInClick() {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }

  onLogin(): void {
    this.loginError = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.value;
    this.loginService.login(credentials).subscribe(
      response => {
        this.loginService.setUsuarioInfo(response);
        this.router.navigate(['/dashboard']); // Cambia '/dashboard' a la ruta que corresponda después del login
      },
      error => {
        console.error('Error during login:', error);
        this.loginError = 'Correo electrónico o contraseña no válidos. Inténtalo de nuevo.';
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
