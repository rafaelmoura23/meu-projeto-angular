// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produtos.service';
import { Produto } from 'src/app/models/produto.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], termoPesquisa: string): any[] {
    if (!items || !termoPesquisa) {
      return items;
    }

    return items.filter(item =>
      item.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
  }
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})

export class ProdutosComponent implements OnInit {
  public produtos: Produto[] = []; // Uma matriz para armazenar as vagas
  carrinhoItens: any[] = []; // Array para armazenar os itens do carrinho
  mostrarCarrinho: boolean = false;
  termoPesquisa: string = '';


  constructor(private _produtosService: ProdutoService, private _carrinhoService: CarrinhoService, private router: Router) { }
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
  adicionarAoCarrinho(produto: any) {
    // Adiciona o produto ao carrinho de compras
    this._carrinhoService.carrinhoItens.push(produto);
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
fecharPedido() {
  // Supondo que você já tenha injetado o CarrinhoService no construtor
  const itensCarrinho = this._carrinhoService.carrinhoItens;

  // Verifica se há itens no carrinho antes de redirecionar para o pagamento
  if (itensCarrinho.length > 0) {
    // Redireciona para a página de pagamento e passa os itens do carrinho como parâmetro na URL
    this.router.navigate(['/pagamento'], { queryParams: { itens: JSON.stringify(itensCarrinho) } });
  } else {
    // Caso não haja itens no carrinho, pode adicionar um feedback ou mensagem para o usuário
    console.log('Seu carrinho está vazio');
    // Ou qualquer ação que você deseja realizar quando o carrinho estiver vazio
  }
}


}
