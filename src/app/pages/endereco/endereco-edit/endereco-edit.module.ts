import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoEditPageRoutingModule } from './endereco-edit-routing.module';

import { EnderecoEditPage } from './endereco-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnderecoEditPage]
})
export class EnderecoEditPageModule {}
