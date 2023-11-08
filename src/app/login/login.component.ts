import { Component } from '@angular/core';
import { AuthService } from '..//auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          console.log('Login bem-sucedido!', response);
          this.successMessage = 'Login feito com Sucesso'
          // Lógica para redirecionar ou manipular a resposta do servidor após o login
        },
        error => {
          console.error('Erro ao fazer login', error);
          this.successMessage = 'Erro ao fazer Login'
        }
      );
  }
}

