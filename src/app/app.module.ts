import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//imports primeng
import { NavegacaoComponent } from './core/navegacao/navegacao.component';
import {MenuModule} from 'primeng/menu';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { CoreModule } from './core/core.module';
import { VendasModule } from './vendas/vendas.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    //modulos
    LancamentosModule,
    ClientesModule,
    CoreModule,
    VendasModule,
    
    // outros imports
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
