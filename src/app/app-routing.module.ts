import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { ProdutosComponent } from './view/produtos/produtos.component';
import { HomeComponent } from './view/home/home.component';
import { PainelProdutosComponent } from './view/painel-produtos/painel-produtos.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { TreinamentosComponent } from './treinamentos/treinamentos.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { PaymentComponent } from './payment/payment.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sobre', component:SobreComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'painel-produtos', component:PainelProdutosComponent},
  {path: 'bem-vindo', component:BemVindoComponent},
  {path: 'treinamentos', component:TreinamentosComponent},
  {path: 'cadastroFuncionario', component:CadastroFuncionarioComponent},
  {path: 'loginFuncionario', component:LoginFuncionarioComponent},
  {path: 'pagamento', component: PaymentComponent}, // rota para o componente de pagamento
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
