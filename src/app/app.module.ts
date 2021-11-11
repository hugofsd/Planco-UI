import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

//imports primeng
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { CoreModule } from './core/core.module';
import { VendasModule } from './vendas/vendas.module';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ButtonModule} from 'primeng/button';
import { DashboardModule } from './dashboard/dashboard.module';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [

    DashboardModule,
    LancamentosModule,
    ClientesModule,
    CoreModule,
    VendasModule,
    
    
    // outros imports
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ButtonModule,
    PanelModule
    
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
