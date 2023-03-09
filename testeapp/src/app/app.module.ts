import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LateralComponent } from './lateral/lateral.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';
import { LoginService } from './login.service';
import { ProdutoService } from './produto.service';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProdutoServidorService } from './produto-servidor.service'

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    LateralComponent,
    HomeComponent,
    ProdutoComponent,
    NovProdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    ProdutoServidorService, 
    { dataEncapsulation: false }
    )
  ],
  
  providers: [ProdutoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
