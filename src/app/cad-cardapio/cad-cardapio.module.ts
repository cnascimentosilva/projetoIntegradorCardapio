import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadCardapioPageRoutingModule } from './cad-cardapio-routing.module';

import { CadCardapioPage } from './cad-cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadCardapioPageRoutingModule
  ],
  declarations: [CadCardapioPage]
})
export class CadCardapioPageModule {}
