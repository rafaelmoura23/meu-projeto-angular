import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api/login'; // Defina a rota de login no seu servidor
  isLoggedIn: boolean = false;
  username: string = '';
  token: string = ''; // Adicionando uma propriedade para armazenar o token

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    // Realiza a chamada de login para a API
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap((response) => {
        this.isLoggedIn = true; // Define o estado de login como verdadeiro após uma resposta bem-sucedida
        this.token = response.token; // Armazena o token JWT recebido do backend
        this.username = username; // Armazena o nome de usuário
        localStorage.setItem('token', this.token); // Armazena o token no localStorage
      })
    );
  }

  logout() {
    // Realiza o logout, definindo o estado de login como falso e limpando os dados
    this.isLoggedIn = false;
    this.username = '';
    this.token = '';
    localStorage.removeItem('token'); // Remove o token do localStorage
    this.router.navigate(['/login']);
  }

  getToken(): string {
    return this.token;
  }
}
