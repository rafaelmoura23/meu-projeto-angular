import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produtos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carrinhoItens: any[] = [];

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private http: HttpClient) { }

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
      const salarioNumerico = parseFloat(item.salario.replace(',', '.')); // Troca vírgula por ponto, se necessário
      if (!isNaN(salarioNumerico)) {
        total += salarioNumerico;
      }
    }
    return parseFloat(total.toFixed(2));
  }


  salvarCompraNoBancoDeDados(carrinhoItens: any[]): void {
    const url = 'http://localhost:3000/api/compra';

    this.http.post<any>(url, { carrinhoItens }).subscribe(
      response => {
        console.log('Compra salva com sucesso no banco de dados!', response);
        // Tratar a resposta, se necessário
      },
      error => {
        console.error('Erro ao salvar compra no banco de dados:', error);
        // Exibir o erro no console para identificar a causa
      }
    );
  }

  finalizarPedido(): void {
    const carrinhoItens = this.carrinhoItens;

    this.salvarCompraNoBancoDeDados(carrinhoItens);
  }

}

