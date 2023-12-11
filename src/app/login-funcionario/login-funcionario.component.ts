import { Component } from '@angular/core';
import { AuthFuncionariosService } from '..//auth-funcionarios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private router: Router, private authFuncionariosService: AuthFuncionariosService) { }

  login() {
    this.authFuncionariosService.login(this.username, this.password)
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
