import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:3000/api/funcionarios';

  constructor(private http: HttpClient) { }

  cadastrarFuncionario(funcionario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, funcionario);
  }
}
