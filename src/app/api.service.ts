import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/data'; // Endpoint da sua API

  constructor(private http: HttpClient, private authService: AuthService) { }

  getData(): Observable<any> {
    const token = this.authService.getToken(); // Obtém o token do serviço de autenticação
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}

