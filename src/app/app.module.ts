import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';

import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastratarProdutoComponent } from './components/produtos/cadastratar-produto/cadastratar-produto.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';


import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { AtualizarClienteComponent } from './components/clientes/atualizar-cliente/atualizar-cliente.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    ListarProdutosComponent,
    CadastratarProdutoComponent,
    AtualizarProdutoComponent,
    CadastrarClienteComponent,
    AtualizarClienteComponent,
    ListarClientesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
