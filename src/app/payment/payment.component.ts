import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carrinhoItens: any[] = [];

  constructor(private route: ActivatedRoute) { }

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
        total += parseFloat(item.salario); // Supondo que o preço do produto esteja em 'salario'
    }
    return total;
  }
}

