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
  carrinhoItens: any[] = []; // Array para armazenar os itens do carrinho
  mostrarCarrinho: boolean = false;

  adicionarAoCarrinho(produto: any) {
    // Adiciona o produto ao carrinho de compras
    this.carrinhoItens.push(produto);
    this.mostrarCarrinho = true;
}

toggleCarrinho() {
  this.mostrarCarrinho = !this.mostrarCarrinho; // Função para alternar a visibilidade do carrinho
}

calcularTotal(): number {
  let total = 0;
  for (let item of this.carrinhoItens) {
      total += parseFloat(item.salario); // Supondo que o preço do produto esteja em 'salario'
  }
  return total;
}

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
