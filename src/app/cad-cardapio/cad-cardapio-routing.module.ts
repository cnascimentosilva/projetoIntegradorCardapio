import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadCardapioPage } from './cad-cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: CadCardapioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadCardapioPageRoutingModule {}
