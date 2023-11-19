import { Component } from '@angular/core';
import { AuthService } from '..//auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          console.log('Login bem-sucedido!', response);
          this.successMessage = 'Login feito com Sucesso';

          // Coloque a lógica de redirecionamento aqui dentro do subscribe
          const username = this.username;
          this.router.navigate(['/bem-vindo', { username: username }]);
        },
        error => {
          console.error('Erro ao fazer login', error);
          this.successMessage = 'Erro ao fazer Login';
        }
      );
  }
}
