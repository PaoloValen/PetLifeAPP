import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirhoraPageRoutingModule } from './pedirhora-routing.module';

import { PedirhoraPage } from './pedirhora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirhoraPageRoutingModule
  ],
  declarations: [PedirhoraPage]
})
export class PedirhoraPageModule {}
