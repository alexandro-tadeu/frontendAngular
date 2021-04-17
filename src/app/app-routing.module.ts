
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastratarProdutoComponent } from './components/produtos/cadastratar-produto/cadastratar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';

import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
<<<<<<< HEAD
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { AtualizarClienteComponent } from './components/clientes/atualizar-cliente/atualizar-cliente.component';
=======
>>>>>>> 1f3f77f9d2e384d36672b94c67596a2f997eb4ba

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ListarProdutosComponent },
<<<<<<< HEAD
  {path: 'produtos/cadastratar', component: CadastratarProdutoComponent },
  {path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent},
  {path: 'clientes', component: ListarClientesComponent},
  {path: 'clientes/cadastrar', component: CadastrarClienteComponent},
  {path: 'clientes/atualizar/:id', component: AtualizarClienteComponent},

=======
  {path: 'produtos/cadastrar', component: CadastratarProdutoComponent },
  {path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent}
>>>>>>> 1f3f77f9d2e384d36672b94c67596a2f997eb4ba
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
