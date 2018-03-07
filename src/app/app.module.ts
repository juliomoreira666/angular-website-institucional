import { QuemSomosModule } from './quem-somos/quem-somos.module';

import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
