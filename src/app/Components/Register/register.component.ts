import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.resetRegisterData();
  }

  resetRegisterData() {
    this.registerData = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  onSubmit(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';

    if (!form.valid) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    if (this.registerData.password !== this.registerData.passwordConfirmation) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some((user: any) => user.email === this.registerData.email)) {
      this.errorMessage = 'Este correo ya está registrado.';
      return;
    }

    users.push({
      email: this.registerData.email,
      password: this.registerData.password
    });

    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      title: '¡Éxito!',
      text: 'Registro exitoso',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      this.router.navigate(['/login']).then(() => {
        this.resetRegisterData();
      });
    });
  }

  goToLogin() {
    this.resetRegisterData();
    this.router.navigate(['/login']);
  }
}