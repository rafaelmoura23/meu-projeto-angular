import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produtos.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carrinhoItens: any[] = [];

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Parâmetros recebidos:', params);
      if (params && params['itens']) {
        this.carrinhoItens = JSON.parse(params['itens']);
      }
    });
  }

  calcularTotal(): number {
    let total = 0;
    for (let item of this.carrinhoItens) {
        total += parseFloat(item.salario);
    }
    return total;
  }

  finalizarPedido(): void {
    const carrinhoItens = this.carrinhoItens;

    this.produtoService.salvarItensCarrinho(carrinhoItens)
      .subscribe(
        () => {
          alert('Pedido finalizado com sucesso!');
          // Realize outras ações após o pedido ser finalizado...
        },
        (error: any) => {
          console.error('Erro ao finalizar pedido:', error);
          alert('Erro ao finalizar pedido');
        }
      );
  }
}

