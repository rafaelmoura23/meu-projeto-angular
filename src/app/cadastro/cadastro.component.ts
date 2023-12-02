import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  submitForm() {
    this.usuarioService.cadastrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso!', response);
          // Limpar o formulário após o cadastro
          this.router.navigate(['/login']);

        },
        error => {
          console.error('Erro ao cadastrar usuário', error);
        }
      );
  }
}
