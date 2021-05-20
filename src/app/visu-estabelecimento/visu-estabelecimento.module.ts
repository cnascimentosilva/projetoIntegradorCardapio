import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisuEstabelecimentoPageRoutingModule } from './visu-estabelecimento-routing.module';

import { VisuEstabelecimentoPage } from './visu-estabelecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisuEstabelecimentoPageRoutingModule
  ],
  declarations: [VisuEstabelecimentoPage]
})
export class VisuEstabelecimentoPageModule {}
