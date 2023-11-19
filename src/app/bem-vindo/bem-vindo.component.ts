import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css'],
})
export class BemVindoComponent implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obter o nome de usuário dos parâmetros da rota
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username') || ''; // Atribuindo o valor do parâmetro da rota ou um valor padrão vazio
  })
}
}
