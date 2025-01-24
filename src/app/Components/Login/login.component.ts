import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.resetLoginData();
  }

  resetLoginData() {
    this.loginData.email = '';
    this.loginData.password = '';
  }

  onSubmit(form: NgForm) {
    this.errorMessage = ''; 

    if (!form.valid) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    const { email, password } = this.loginData;

    if (this.authService.login(email, password)) {
      Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }

  goToRegister() {
    this.resetLoginData();
    this.router.navigate(['/register']);
  }
}
