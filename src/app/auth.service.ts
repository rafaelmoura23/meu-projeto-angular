import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api/login'; // Defina a rota de login no seu servidor

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.apiUrl, { username, password });
  }
}
