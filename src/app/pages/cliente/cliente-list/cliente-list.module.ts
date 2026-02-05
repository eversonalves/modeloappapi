import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteListPageRoutingModule } from './cliente-list-routing.module';

import { ClienteListPage } from './cliente-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteListPage]
})
export class ClienteListPageModule {}
