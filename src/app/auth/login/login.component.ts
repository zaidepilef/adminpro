import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
	errorMessage: string | null = null;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
	) {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
	}


  onSubmit() {

		if (this.loginForm.invalid) return;

		const credentials = this.loginForm.value;

		this.authService.login(credentials).subscribe({
			next: (response) => {
				
				this.authService.saveToken(response);
				this.router.navigate(['/home']); // Redirigir al Dashboard
			},
			error: (err) => {
				this.errorMessage = 'Correo o contraseña incorrectos';
				console.error('Error en login', err);
			}
		});
	}
}
