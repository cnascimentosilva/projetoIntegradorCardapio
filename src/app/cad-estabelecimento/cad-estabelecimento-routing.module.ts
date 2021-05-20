import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadEstabelecimentoPage } from './cad-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: CadEstabelecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadEstabelecimentoPageRoutingModule {}
