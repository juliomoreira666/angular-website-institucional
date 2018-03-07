import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  declarations: [
    ContatoComponent
  ],
  exports: [ContatoComponent]
})
export class ContatoModule { }
