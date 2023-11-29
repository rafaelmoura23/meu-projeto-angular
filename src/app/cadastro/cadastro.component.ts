import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { NgxMaskService } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
    cpf:''
  };

  constructor(private usuarioService: UsuarioService,
    private maskService: NgxMaskService
    ) {}

  submitForm() {
    this.usuarioService.cadastrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso!', response);
          // Limpar o formulário após o cadastro
          this.usuario = {
            nome: '',
            email: '',
            senha: '',
            cpf:''
          };
        },
        error => {
          console.error('Erro ao cadastrar usuário', error);
        }
      );
  }
}
