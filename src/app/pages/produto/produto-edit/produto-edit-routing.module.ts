import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoEditPage } from './produto-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoEditPageRoutingModule {}
