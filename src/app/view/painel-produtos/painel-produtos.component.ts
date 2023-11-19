// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-painel-produtos',
  templateUrl: './painel-produtos.component.html',
  styleUrls: ['./painel-produtos.component.css'],
})

export class PainelProdutosComponent implements OnInit {
  public produto: Produto = new Produto(0, '', '', '', 0);
  // Uma instância de 'Vaga' para rastrear os dados do formulário
  public produtos: Produto[] = [];
  // Uma matriz para armazenar as vagas listadas
  constructor(private _produtosService: ProdutoService) {}
  // aplica o serviço 'VagaService' no construtor
  ngOnInit(): void {
    this.listarProdutos();
    // Quando o componente é inicializado, lista as vagas disponíveis
  }
  listarProdutos() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._produtosService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Produto(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }
  listarProduto(produto: Produto) {
    // Função para listar uma vaga individual no formulário para edição
    this.produto = produto;
    // A vaga clicada é definida como a vaga atual no formulário
  }
  cadastrar() {
    // Função para cadastrar uma nova vaga
    this._produtosService.cadastrarProduto(this.produto).subscribe(
      () => {
        // Após cadastrar com sucesso
        this.produto = new Produto(0, '', '', '', 0); // Limpa o formulário
        this.listarProdutos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao cadastrar', err);
        // Em caso de erro, exibe uma mensagem no console
      }
    );
  }
  atualizar(id: number) {
    // Função para atualizar uma vaga existente
    this._produtosService.atualizarProduto(id, this.produto).subscribe(
      () => {
        // Após atualizar com sucesso
        this.produto = new Produto(0, '', '', '', 0); // Limpa o formulário
        this.listarProdutos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao atualizar', err);
      }
    );
  }
  excluir(id: number) {
    // Função para excluir uma vaga
    this._produtosService.removerProduto(id).subscribe(
      () => {
        // Após excluir com sucesso
        this.produto = new Produto(0, '', '', '', 0); // Limpa o formulário
        this.listarProdutos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao excluir', err);
      }
    );
  }
}
