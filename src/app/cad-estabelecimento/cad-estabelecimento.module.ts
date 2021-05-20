import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadEstabelecimentoPageRoutingModule } from './cad-estabelecimento-routing.module';

import { CadEstabelecimentoPage } from './cad-estabelecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadEstabelecimentoPageRoutingModule
  ],
  declarations: [CadEstabelecimentoPage]
})
export class CadEstabelecimentoPageModule {}
