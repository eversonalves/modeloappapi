import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoAddPageRoutingModule } from './endereco-add-routing.module';

import { EnderecoAddPage } from './endereco-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnderecoAddPage]
})
export class EnderecoAddPageModule {}
