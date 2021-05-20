import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisuCardapioPage } from './visu-cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: VisuCardapioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisuCardapioPageRoutingModule {}
