import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisuCardapioPageRoutingModule } from './visu-cardapio-routing.module';

import { VisuCardapioPage } from './visu-cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisuCardapioPageRoutingModule
  ],
  declarations: [VisuCardapioPage]
})
export class VisuCardapioPageModule {}
