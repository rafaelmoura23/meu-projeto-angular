import { Component } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  funcionario = {
    nome: '',
    email: '',
    empresa: '',
    cnpj: '',
    senha: ''
  };
  errorMessage = ''; // Mensagem de erro para exibir no template, se necessário

  constructor(private funcionarioService: FuncionarioService, private router: Router) {}

  submitForm() {
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (this.camposPreenchidos()) {
      this.funcionarioService.cadastrarFuncionario(this.funcionario)
        .subscribe(
          response => {
            alert("Usuário Cadastrado com Sucesso! ✔")
            console.log('Usuário cadastrado com sucesso!', response);
            // Limpar o formulário após o cadastro
            this.router.navigate(['/loginFuncionario']);
          },
          error => {
            console.error('Erro ao cadastrar funcionário', error);
          }
        );
    } else {
      this.errorMessage = 'Todos os campos são obrigatórios';
      alert("Todos os campos devem ser preenchidos") // Define a mensagem de erro
    }
    
  }

  // Método para verificar se todos os campos obrigatórios estão preenchidos
  camposPreenchidos(): boolean {
    return (
      !!this.funcionario.nome &&
      !!this.funcionario.email &&
      !!this.funcionario.empresa &&
      !!this.funcionario.cnpj &&
      !!this.funcionario.senha
    );
  }
  
}
