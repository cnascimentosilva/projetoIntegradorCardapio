import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisuEstabelecimentoPage } from './visu-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: VisuEstabelecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisuEstabelecimentoPageRoutingModule {}
