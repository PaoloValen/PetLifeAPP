import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedirhoraPage } from './pedirhora.page';

const routes: Routes = [
  {
    path: '',
    component: PedirhoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedirhoraPageRoutingModule {}
