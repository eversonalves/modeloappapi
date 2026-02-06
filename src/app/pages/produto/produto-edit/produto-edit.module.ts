import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoEditPageRoutingModule } from './produto-edit-routing.module';

import { ProdutoEditPage } from './produto-edit.page';
import { RouteConfigLoadEnd } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoEditPage]
})
export class ProdutoEditPageModule {}
