import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ProdutosComponent } from './view/produtos/produtos.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { CarouselBemAvaliadosComponent } from './view/carousel-bem-avaliados/carousel-bem-avaliados.component';
import { CardsPatrocinadoresComponent } from './view/cards-patrocinadores/cards-patrocinadores.component';
import { BeneficiosClientesComponent } from './view/beneficios-clientes/beneficios-clientes.component';
import { PainelProdutosComponent } from './view/painel-produtos/painel-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    SobreComponent,
    CarouselBemAvaliadosComponent,
    CardsPatrocinadoresComponent,
    BeneficiosClientesComponent,
    PainelProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
