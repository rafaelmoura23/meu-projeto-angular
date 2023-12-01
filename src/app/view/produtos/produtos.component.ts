// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produtos.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  public produtos: Produto[] = []; // Uma matriz para armazenar as vagas
  constructor(private _produtosService: ProdutoService) { }
  // Injeta o serviço de vagas no construtor do componente
  ngOnInit(): void {
    this.listarProdutos();
    // Executa a função de listagem de vagas quando é inicializado
  }
  // Função para listar as vagas
  listarProdutos() {
    this._produtosService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        // Mapeia os dados retornados para o modelo Vaga
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
}
