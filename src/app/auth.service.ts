import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api/login'; // Defina a rota de login no seu servidor
  isLoggedIn: boolean = false;
  username : string = '';

  constructor(private http: HttpClient, private router:Router) { }

  login(username: string, password: string) {
    // Realiza a chamada de login para a API
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap(() => {
        this.isLoggedIn = true; // Define o estado de login como verdadeiro após uma resposta bem-sucedida
      })
    );
  }

  logout() {
    // Realiza o logout, definindo o estado de login como falso
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(['/login']);
  }

}

