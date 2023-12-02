// carrinho.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinhoItens: any[] = [];

  constructor() { }
}
