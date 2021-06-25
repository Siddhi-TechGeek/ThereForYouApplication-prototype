import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdharverifyPage } from './adharverify.page';

const routes: Routes = [
  {
    path: '',
    component: AdharverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdharverifyPageRoutingModule {}
