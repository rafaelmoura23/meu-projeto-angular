import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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

  constructor(private usuarioService: UsuarioService) {}

  submitForm() {
    this.usuarioService.cadastrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso!', response);
          // Limpar o formulário após o cadastro
          this.usuario = {
            nome: '',
            email: '',
            senha: ''
          };
        },
        error => {
          console.error('Erro ao cadastrar usuário', error);
        }
      );
  }
}
