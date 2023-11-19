// Importa os módulos necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})

export class ProdutoService {

  private apiUrl = 'http://localhost:3030/produtos'; // Caminho para o arquivo JSON
  
  constructor(private http: HttpClient) { }
  // Obtém a lista de vagas a partir do arquivo JSON
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
  // Cadastra uma nova vaga no servidor
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.apiUrl, produto);
  }
  // Atualiza uma vaga existente no servidor
  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Produto[]>(urlAtualizar, produto);
  }
  // Remove uma vaga do servidor
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Produto[]>(urlDeletar);
  }
}